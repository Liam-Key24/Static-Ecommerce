'use client'

import "./globals.css";
import { useEffect, useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <html lang="en">
      <body>
        <main>
          {isClient ? children : null}
        </main>
      </body>
    </html>
  )
}
