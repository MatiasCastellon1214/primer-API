import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/pages/home/Home";
import Characters from "./component/pages/characters/Characters";

function App() {
  return (
    <BrowserRouter>
      <Routes> 

        <Route path="/" element={ <Home /> } />
        <Route path="/characters" element={ <Characters /> } />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
