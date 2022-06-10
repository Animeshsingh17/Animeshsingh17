import React, { useState } from "react";
import database from "./firebase";
import { getDatabase, ref, set } from "firebase/database";

function CreateNote() {
  const [note, setNote] = useState("");
  const CreateNote = (e) => {
    e.preventDefault();
    const item = {
      task: note,
      done: false,
    };
    console.log(item);
    const db = getDatabase();
    set(ref(db, "users/"), item);
    setNote("");
  };
  return (
    <form onSubmit={CreateNote}>
      <input
        type="text"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="create a note"
      />
      CreateNote
    </form>
  );
}

export default CreateNote;
