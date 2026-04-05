import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Main_p from "./Components/Main_p";
import { BrowserRouter } from "react-router-dom";

//import { createContext,useState } from "react";

//export const mycontext = createContext();

function App(){

  return(
    <div className="app">
      <BrowserRouter>
      <Header/>
      <Footer/>
      <Main_p/>
      </BrowserRouter>
    </div>
  );
}
export default App;