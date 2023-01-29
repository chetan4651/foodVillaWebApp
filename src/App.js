import React from "react";
import { createRoot } from "react-dom";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

const App = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

// text-3xl font-bold underline
const root = createRoot(document.getElementById("root"));
root.render(<App />);
