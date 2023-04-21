import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./page/Home";
import StoryList from "./page/StoryList";
import NavHeader from "./components/NavHeader";
import Fruit from "./page/Fruit";
import { DataProvider } from "./context/DataContext";
function App() {
  return (
    <div className="App">
      <NavHeader />
      <DataProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/storylist" element={<StoryList />}>
            <Route path=":name" element={<Fruit/>}/>
            </Route>

        </Routes>
      </DataProvider>
    </div>
  );
}

export default App;
