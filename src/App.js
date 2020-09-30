import React, { useState } from "react";
import Header from "./Header";
// import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [items, setItems] = useState([]);

  function submit(title, note, e, SetTitle, SetNote) {
    e.preventDefault();
    setItems((prev) => {
      return [...prev, { title, note }];
    });
    SetTitle("");
    SetNote("");
  }
  function dataDelete(id) {
    setItems((prev) => {
      return prev.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div className="app">
      <Header />
      <CreateArea submit={submit} />
      {items.map((item, index) => (
        <Note
          id={index}
          key={1}
          title={item.title}
          content={item.note}
          dataDelete={dataDelete}
        />
      ))}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
