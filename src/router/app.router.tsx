import { START } from "@/1main/START";
import { About } from "@/2about/about";
import { createBrowserRouter } from "react-router";
import { Contact } from "@/4Form/Contact";

export const AppRouter = createBrowserRouter([
    {
        path: '/',
        element: <START/>
    },
    {
        path:'/about',
        element: <About />
    },
    {
        path:'/contact',
        element: <Contact />
    }
])