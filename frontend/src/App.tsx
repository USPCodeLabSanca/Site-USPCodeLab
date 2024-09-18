import Routes from "./routes";
import { ScrollToTop } from "./components";
import { DataProvider, useData } from "./contexts/DataContext";

function App() {
  const { loading } = useData();

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <div className="w-full h-full ">
        <ScrollToTop />
        <Routes />
      </div>
    </div>
  );
}

function AppWithContext() {
  return (
    <DataProvider>
      <App />
    </DataProvider>
  );
}

export default AppWithContext;
