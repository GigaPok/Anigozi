import React from "react";
import { Header, Footer } from "./components";

export const Mainlayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
