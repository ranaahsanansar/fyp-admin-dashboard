import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import AddNewPropertyPage from "./pages/AddNewPropertyPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="add-property" element={<AddNewPropertyPage />} />
            
          </Route>
          <Route path="*" element={<h1>ASN 404 Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
