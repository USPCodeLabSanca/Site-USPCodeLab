import { Routes, Route } from "react-router-dom";
import {Homepage, Projects, Events} from "src/pages";


function App() {

  return (
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

export default App
