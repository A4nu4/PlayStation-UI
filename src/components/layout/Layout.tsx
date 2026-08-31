import React, { type PropsWithChildren } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const Layout = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <div
      className="bg-cover bg-no-repeat bg-center h-screen relative"
      style={{ backgroundImage: "url('/images/bg-gow.jpg')" }}
    >
      <div className="absolute insert-0 pointer-events-none bg-[radial-gradient(circle,rgba(0,0,0,0)_40%,rgba(0,0,0,0.75)_100%)]" />

      <div className="z-10 relative">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
