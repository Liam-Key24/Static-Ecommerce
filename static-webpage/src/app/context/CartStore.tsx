import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartItem {
  id: number
  name: string
  price: number
  size: string
  quantity: number
  image: string
}

interface CartState {
  items: CartItem[]
  addToCart: (item: CartItem) => void
  updateQuantity: (id: number, newQuantity: number) => void
  removeItem: (id: number) => void
  getCartCount: () => number
}

export const useCartStore = create(
  persist<CartState>(
    (set, get) => ({
      items: [],
      
      addToCart: (newItem) =>
        set((state) => {
          const existingItem = state.items.find(
            item => item.id === newItem.id && item.size === newItem.size
          )

          if (existingItem) {
            return {
              items: state.items.map(item =>
                item.id === newItem.id && item.size === newItem.size
                  ? { ...item, quantity: item.quantity + newItem.quantity }
                  : item
              ),
            }
          }
          return { items: [...state.items, newItem] }
        }),

      updateQuantity: (id, newQuantity) => {
        if (newQuantity < 1) return
        set((state) => ({
          items: state.items.map(item =>
            item.id === id ? { ...item, quantity: newQuantity } : item
          ),
        }))
      },

      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter(item => item.id !== id),
        })),

      getCartCount: () => {
        const state = get()
        return state.items.reduce((sum, item) => sum + item.quantity, 0)
      },
    }),
    {
      name: "cart-storage",
    }
  )
)