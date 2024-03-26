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

  return (
    <div id="show-notes-container">
      <FavoriteNotes />
      <AllNotes />
    </div>
  );
};

export default ShowNotes;
