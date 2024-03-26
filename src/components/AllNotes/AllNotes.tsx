//styles
import "./styles.scss";

//components
import Card from "../Card/Card";

interface Note {
  id: string;
  title: string;
  annotation: string;
  isFavorite: boolean;
  color?: string;
}

interface AllNotesProps {
  notes: Note[];
}

const AllNotes = ({ notes }: AllNotesProps) => {
  return (
    <div id="all-notes-container">
      <h2 id="title-all-notes">Outras</h2>
      <div className="all-notes-list-container">
        {notes.map((note) => (
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
