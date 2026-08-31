import React, { type PropsWithChildren } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const Layout = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <div
      className="bg-cover bg-no-repeat bg-center h-screen"
      style={{ backgroundImage: "url('/images/bg-gow.jpg')" }}
    >
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
