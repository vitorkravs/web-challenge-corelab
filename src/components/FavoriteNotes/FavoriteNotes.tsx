"use client";

//styles
import "./styles.scss";

//icons
import { LiaStarSolid } from "react-icons/lia";
import { IoMdStarOutline } from "react-icons/io";

//hooks
import { useState, useEffect } from "react";

//requisição
import axios from "axios";
import Card from "../Card/Card";

interface Note {
  id: string;
  title: string;
  annotation: string;
  isFavorite: boolean;
}

const FavoriteNotes = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    const getNotes = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3333/api/annotations"
        );
        setNotes(response.data);
        console.log(response);
      } catch (error) {
        console.log("erro ao criar nota, ", error);
      }
    };
    getNotes();
  }, []);

  const favoriteNotes = notes.filter((note) => note.isFavorite);

  return (
    <div id="favorite-notes-container">
      <h2 id="title-favorite-notes">Favoritas</h2>
      {notes.map((note) => (
        <Card
          key={note.id}
          title={note.title}
          annotation={note.annotation}
          isFavorite={note.isFavorite}
        />
      ))}
    </div>
  );
};

export default FavoriteNotes;
