//styles
import "./styles.scss";

//components
import Card from "../Card/Card";
import { useNotes } from "@/context/notesContext";

const FavoriteNotes = () => {
  const { filteredFavoriteNotes } = useNotes();

  if (
    filteredFavoriteNotes === null ||
    filteredFavoriteNotes === undefined ||
    filteredFavoriteNotes.length === 0
  ) {
    return (
      <div id="favorite-notes-container">
        <h2 id="title-favorite-notes">Favoritas</h2>
        <div>Nenhuma nota favorita</div>
      </div>
    );
  }
  return (
    <div id="favorite-notes-container">
      <h2 id="title-favorite-notes">Favoritas</h2>
      <div className="favorite-notes-list-container">
        {filteredFavoriteNotes.map((note) => (
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

export default FavoriteNotes;
