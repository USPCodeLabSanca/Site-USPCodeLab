import Routes from "./routes"
import { ScrollToTop } from "./components"

function App() {

  return (
    <div>
      <div className="w-full h-full ">
        <ScrollToTop />
        <Routes />
      </div>
    </div>
  )
}

export default App
