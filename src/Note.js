import React from "react";

function Note({ title, content, dataDelete, id }) {
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={() => dataDelete(id)}>DELETE</button>
    </div>
  );
}

export default Note;
