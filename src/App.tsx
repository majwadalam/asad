/* eslint-disable @typescript-eslint/no-explicit-any */
import { Route, Routes } from "react-router-dom";
import HomeScreen from "./pages/Home";
import UploadImageScreen from "./pages/UploadImage";
import AddTextScreen from "./pages/AddText.tsx";
import Gallery from "./pages/Gallery.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/upload" element={<UploadImageScreen />} />
      <Route path="/add-text" element={<AddTextScreen />} />
      <Route path="/gallery" element={<Gallery />} />
    </Routes>
  );
}

export default App;
