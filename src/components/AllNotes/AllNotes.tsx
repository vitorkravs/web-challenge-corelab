//styles
import "./styles.scss";

//components
import Card from "../Card/Card";
import { useNotes } from "@/context/notesContext";

const AllNotes = () => {
  const { filteredNotes } = useNotes();

  if (
    filteredNotes === null ||
    filteredNotes === undefined ||
    filteredNotes.length === 0
  ) {
    return (
      <div id="all-notes-container">
        <h2 id="title-all-notes">Outras</h2>
        <div>Nenhuma nota</div>
      </div>
    );
  }

  return (
    <div id="all-notes-container">
      <h2 id="title-all-notes">Outras</h2>
      <div className="all-notes-list-container">
        {filteredNotes.map((note) => (
          <Card
            key={note.id}
            id={note.id}
            title={note.title}
            annotation={note.annotation}
            isFavorite={note.isFavorite}
            color={note.color}
          />
        ))}
      </div>
    </div>
  );
};

export default AllNotes;
