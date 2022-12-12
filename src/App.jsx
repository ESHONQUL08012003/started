import { Routes, Route } from "react-router-dom";
import { context } from "./context/Context";
import { About, Home,Login } from "./pages";
import { Private } from "./private";
import "./App.css";

function App() {
  return (
    <>
      <context.Provider value={{}}> 
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Private/>}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </context.Provider>
    </>
  );
}

export default App;
