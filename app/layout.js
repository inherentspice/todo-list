"use client";
import DarkMode from "./darkmode";

export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <head />
        <body>
          <DarkMode/>
          <h1>Todo App</h1>
          {children}
        </body>
      </html>
  )
}
