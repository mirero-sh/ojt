import React from "react"
import ReactDOM from "react-dom/client"
import reportWebVitals from "./reportWebVitals"
import "./styles/global.css"
import Router from "./routes/Router"
import { RouterProvider } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <RouterProvider router={Router()} />
  </React.StrictMode>
)

reportWebVitals()
