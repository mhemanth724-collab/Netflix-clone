import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MyList from "./pages/MyList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mylist" element={<MyList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;