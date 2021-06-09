import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import './App.css';

import ImageFetch from "./components/ImageFetch/ImageFetch";

function App() {
  return (
    <main className="page-container" >
      <Header></Header>
      <div className="container mx-auto">
        <ImageFetch></ImageFetch>
      </div>
      <Footer></Footer>
    </main>
  );
}

export default App;
