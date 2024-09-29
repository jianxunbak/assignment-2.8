import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./routes/Header";
import View from "./routes/View";
import Add from "./routes/Add";
import AboutUs from "./routes/AboutUs";
import ContactUs from "./routes/ContactUs";
import Career from "./routes/Career";
import Investors from "./routes/Investors";
import { dummyData } from "./data";
import { useState } from "react";
import Item from "./routes/Item";
import ItemDefault from "./routes/ItemDefault";

function DefaultPage() {
  //use location hook is from react to get the path
  const location = useLocation();
  return <p>you have entered an invalid path - {location.pathname}</p>;
}
function App() {
  // ---------- STATES ---------- //
  const [list, setList] = useState(dummyData);

  // ---------- HANDLERS ---------- //
  const handlerDeleteProduct = (id) => {
    setList((prevList) => {
      const selectedItem = list.filter((item) => item.id === id);
      return selectedItem;
    });
  };

  // ---------- JSX ---------- //
  return (
    <>
      <h1>hello</h1>
      <BrowserRouter>
        <Routes>
          {/* Parent Route */}
          <Route path="/" element={<Header />}>
            {/* Children Route wrap inside parent route*/}
            <Route path="view" element={<View list={list} />}>
              {/* index route - default child route */}
              <Route index element={<ItemDefault />} />
              <Route
                path=":id"
                element={
                  <Item
                    list={list}
                    handlerDeleteProduct={handlerDeleteProduct}
                  />
                }
              />
            </Route>
            {/* Children Route wrap inside parent route*/}
            <Route path="Add" element={<Add setList={setList} />} />
            <Route path="about-us" element={<AboutUs />}>
              <Route path="contact" element={<ContactUs />} />
              <Route path="career" element={<Career />} />
              <Route path="investors" element={<Investors />} />
            </Route>
          </Route>
          {/* Additional route to catch all other paths (using *, * means all other page) by creating a default route */}
          <Route path="*" element={<DefaultPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
