import {  Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Publication from "./Publication/Publication"
import Photo from "./Photo/Photo";
import Contact from "./Contact/Contact";
const Main = () => {
    return (
        
        <main className="main">
            <Routes>
                <Route path="publications" element={<Publication />} />
                <Route path="photo" element={<Photo />} />
                <Route path="contacts" element={<Contact />} />
                <Route index path="*"  element={<Home />} />
            </Routes>
        </main>
        
    )
}
export default Main