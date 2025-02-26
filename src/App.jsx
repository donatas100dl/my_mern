import Sidebar from "./components/sidebar"
import Footer from "./components/Footer"
import { Route, Routes } from "react-router-dom";

import {AuthProvider} from "./uttils/authContext.jsx"

import ErrPage from "./components/ErrPage.jsx"
import Dashboard from "./pages/dashboard.jsx";
import Login from "./pages/Login.jsx"
import Register from "./pages/Register.jsx";
import LoadBook from "./components/loadBook.jsx"
function App() {
  return (
    <div className="s">
      <AuthProvider>
    <div className="flex">
      <Sidebar />
      {/* main */}

      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/about" element={<main>About Page</main>} />
        <Route path="/book/:id" element={<LoadBook/>} />
        <Route path="/*" element={<ErrPage/>} />
      </Routes>


    </div>
     <Footer></Footer>
     </AuthProvider>
    </div>
  )
}

export default App


