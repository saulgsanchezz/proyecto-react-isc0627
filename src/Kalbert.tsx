import { RouterProvider } from "react-router"
import { AppRouter } from "./router/app.router"

export const Kalbert = () => {
    return(
        <>
        <RouterProvider router={AppRouter}/>
        </>
    )
}