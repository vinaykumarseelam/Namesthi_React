import React from "react";
import ReactDOM from "react-dom/client";
import Header from "../components/Header";
import {Title} from "../components/Header";
import {Body} from "../components/Body";
import Footer from "../components/Footer";


const container = React.createElement("div", { id: "container" }, [
  React.createElement("h1", { id: "title" }, "Heading1"),
  React.createElement("h1", { id: "title" }, "Heading1"),
  React.createElement("h1", { id: "title" }, "Heading1"),
]);



//Components








//Body



//Footer



const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
