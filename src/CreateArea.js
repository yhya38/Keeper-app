import React, { useState } from "react";

function CreateArea({ submit }) {
  const [title, SetTitle] = useState("");
  const [note, SetNote] = useState("");

  function handleSubmit(e) {
    return submit(title, note, e, SetTitle, SetNote);
  }

  return (
    <div style={{padding: "10px", width:"100%"}}>
      <form>
        <input
          name="title"
          onChange={(e) => SetTitle(e.target.value)}
          placeholder="Title"
          value={title}
        />
        <textarea
          value={note}
          onChange={(e) => SetNote(e.target.value)}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button
          type="submit"
          disabled={(title.length && note.length) < 1}
          onClick={handleSubmit}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
