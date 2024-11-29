import { Route, RouterProvider, createHashRouter, createRoutesFromElements } from 'react-router-dom'
import Home from '../pages/home/Home'
import Experience from '../pages/experience/Experience'
import Projects from '../pages/projects/Projects'
import Contact from '../pages/contact/Contact'

const router = createHashRouter(
    createRoutesFromElements(
        <Route>
            <Route path='/' element={<Home />} />
            <Route path='/experience' element={<Experience />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
        </Route>
    )
)

export function Router() {
    return (
        <RouterProvider router={router} />
    )
}