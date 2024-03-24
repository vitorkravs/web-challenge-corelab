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
import FavoriteNotes from "../FavoriteNotes/FavoriteNotes";

interface Note {
  id: string;
  title: string;
  annotation: string;
  isFavorite: boolean;
}

const ShowNotes = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    const getNotes = async () => {
      try {
        const response = await axios.get("http://192.168.2.105:3333/api/notes");
        setNotes(response.data);
        console.log(response);
      } catch (error) {
        console.log("erro ao criar nota, ", error);
      }
    };
    getNotes();
  }, []);

  const favoriteNotes = notes.filter((note) => note.isFavorite);

  return <FavoriteNotes favoriteNotes={favoriteNotes} />;
};

export default ShowNotes;
