import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { Home, Contact, Products, Videos, About, Production } from "./feature";
import { home, contact, products, videos, about, production } from "./router";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={home} element={<Home />} exact />
        <Route path={contact} element={<Contact />} exact />
        <Route path={products} element={<Products exact />} />
        <Route path={videos} element={<Videos />} exact />
        <Route path={about} element={<About />} exact />
        <Route path={production} element={<Production exact />} />
      </Routes>
    </div>
  );
}

export default App;
