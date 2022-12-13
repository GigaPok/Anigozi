import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { Home, Contact, Products, Videos, About, Production } from "./feature";
import { home, contact, products, videos, about, production } from "./router";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={home} element={<Home />} />
        <Route path={contact} element={<Contact />} />
        <Route path={products} element={<Products />} />
        <Route path={videos} element={<Videos />} />
        <Route path={about} element={<About />} />
        <Route path={production} element={<Production />} />
      </Routes>
    </div>
  );
}

export default App;
