import { Route, Routes } from "react-router-dom";
import {BrowserRouter} from "react-router-dom";
import Posts from "./pages/posts";
import Login from "./pages/Login";


export default function Router () {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/codeleapPage/posts" element={<Posts/>}/>
            <Route path="/codeleapPage/" element={<Login/>}/>
        </Routes>
        </BrowserRouter>
    )
}