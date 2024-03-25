"use client";

//styles
import "./styles.scss";

//hooks
import { useEffect } from "react";

//components
import FavoriteNotes from "../FavoriteNotes/FavoriteNotes";

//context
import { useNotes } from "@/context/notesContext";
import AllNotes from "../AllNotes/AllNotes";

const ShowNotes = () => {
  const { notes, getNotes } = useNotes();

  useEffect(() => {
    getNotes();
  }, []);

  const favoriteNotes = notes.filter((note) => note.isFavorite);
  const allNotes = notes.filter((note) => !note.isFavorite);

  return (
    <>
      <FavoriteNotes favoriteNotes={favoriteNotes} />
      <AllNotes notes={allNotes} />
    </>
  );
};

export default ShowNotes;
