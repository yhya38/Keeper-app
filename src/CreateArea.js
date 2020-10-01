import React, { useState } from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
function CreateArea({ submit }) {
  const [title, SetTitle] = useState("");
  const [note, SetNote] = useState("");
  const [isExpanded, setIsExpanded]=useState(false)

  function handleSubmit(e) {
    return submit(title, note, e, SetTitle, SetNote);
  }

  function expanded() {
    setIsExpanded(true)
  }
  return (
    <div style={{ padding: "10px", width: "100%" }}>
      <form>
        {isExpanded && (
          <input
            name="title"
            onChange={(e) => SetTitle(e.target.value)}
            placeholder="Title"
            value={title}
          />
        )}
        <textarea
          value={note}
          onChange={(e) => SetNote(e.target.value)}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded? "3": "1"}
          onClick={expanded}
        />
        <button
          type="submit"
          disabled={(title.length && note.length) < 1}
          onClick={handleSubmit}
        >
          <AddCircleIcon className="icon" />
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
