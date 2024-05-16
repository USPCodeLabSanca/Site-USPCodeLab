import { Routes, Route } from "react-router-dom";
import {Homepage, Projects, Events} from "src/pages";


export default function PageRoutes(){
    return(
        <>
        <Routes>
            <Route path="/" 
            element={ <Homepage/>} // inserir paginas aqui
            />

            <Route path="/projects"
            element={<Projects/>}
            />

            <Route path="/events"
            element={<Events/>}/>
        </Routes>
        </>
    )
}
