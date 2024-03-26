//styles
import "./styles.scss";

//components
import Card from "../Card/Card";

interface Note {
  id: string;
  title: string;
  annotation: string;
  isFavorite: boolean;
  color: string;
}

interface FavoriteNotesProps {
  favoriteNotes: Note[];
}

const FavoriteNotes = ({ favoriteNotes }: FavoriteNotesProps) => {
  return (
    <div id="favorite-notes-container">
      <h2 id="title-favorite-notes">Favoritas</h2>
      {favoriteNotes.map((note) => (
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
  );
};

export default FavoriteNotes;
