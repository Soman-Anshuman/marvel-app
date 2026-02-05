import { Route, Routes } from "react-router-dom";
import Characters from "./characters/Characters";
import Comics from "./comics/Comics";
import Login from "./components/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Characters />}></Route>
      <Route path="/comics" element={<Comics />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
}

export default App;
