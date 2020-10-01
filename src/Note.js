import React from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

function Note({ title, content, dataDelete, id }) {
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={() => dataDelete(id)}><DeleteForeverIcon className="icon" /></button>
    </div>
  );
}

export default Note;
