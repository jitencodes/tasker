import React from "react";
import Header from "./components/header";
import createCard from "./components/minors/card";
import Footer from "./components/footer";
import NewNote from "./components/newNote";

var ls = require("local-storage");

function App() {
  const storedNotes = JSON.parse(ls.get("notes"));
  const [notes, setnotes] = React.useState(() => {
    if (storedNotes != null) {
      return storedNotes;
    }
    return [
      {
        id: 0,
        title: "Hey, I'm a note!",
        note:
        "Click the delete icon below to delete me and start making your own notes ;)",
      }, {
        id: 0,
        title: "second Note",
        note:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elementum dictum tincidunt. Nullam in convallis lectus. Donec vestibulum sagittis lectus, sit amet posuere odio pharetra ac. Nullam pulvinar orci vel aliquet malesuada. Nulla maximus, lorem non rutrum viverra, mauris mi interdum neque, id commodo dui ante sit amet nisi.  ",
      },
      {
        id: 0,
        title: "third Note",
        note:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elementum dictum tincidunt. Nullam in convallis lectus. Donec vestibulum sagittis lectus, sit amet posuere odio pharetra ac. Nullam pulvinar orci vel aliquet malesuada. Nulla maximus, lorem non rutrum viverra, mauris mi interdum neque, id commodo dui ante sit amet nisi.  ",
      },
      {
        id: 0,
        title: "fourth Note",
        note:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elementum dictum tincidunt. Nullam in convallis lectus. Donec vestibulum sagittis lectus, sit amet posuere odio pharetra ac. Nullam pulvinar orci vel aliquet malesuada. Nulla maximus, lorem non rutrum viverra, mauris mi interdum neque, id commodo dui ante sit amet nisi.  ",
      },
    ];
  });

  function addNote(title, content) {
    const newId = Math.round(Math.random() * 100);
    setnotes(
      [
        ...notes,
        {
          id: newId,
          title: title,
          note: content,
        },
      ]
    );
    
    // setTimeout(saveNotestoLocal, 1000);
  }

  function deleteNote(id) {
    setnotes((notes) => {
      return notes.filter((note) => note.id !== id);
    });
  }
  //saving notes to local storage
  ls("notes", JSON.stringify(notes));
  console.log(notes);
  return (
    <div>
      <Header />
      <NewNote add={addNote} />
      <div className="row">
        {notes.map((note) => createCard(note, deleteNote))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
