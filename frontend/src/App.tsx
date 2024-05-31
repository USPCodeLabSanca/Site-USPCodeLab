import Routes from "./routes"
import { Header } from 'src/components'

function App() {

  return (
    <div>
      <div className="w-screen h-screen bg-background overflow-x-hidden overflow-y-auto">
        <Header />
        <Routes />
      </div>
    </div>
  )
}

export default App
