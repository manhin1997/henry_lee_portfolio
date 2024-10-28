import { Route, Routes } from "react-router-dom";
import Index from "./pages/index/Index";

function App() {
  return (
    <Routes>
      <Route element={<Index />} path="/" />
    </Routes>
  );
}

export default App;