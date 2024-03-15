"use client";

//styles
import "./styles.scss";

//hooks
import { useState } from "react";

//requisição
import axios from "axios";

//icons
import { IoMdStarOutline } from "react-icons/io";
import { LiaStarSolid } from "react-icons/lia";

const CreateNote = () => {
  const [title, setTitle] = useState("");
  const [annotation, setAnnotation] = useState("");
  const [isFavorite, setIsFavorite] = useState(false);

  const createNewNote = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios
        .post("http://localhost:3333/api/annotations/post", {
          title: title,
          annotation: annotation,
          is_favorite: isFavorite,
        })
        .then(function (response) {
          console.log(response);
        });
      setTitle("");
      setAnnotation("");
      setIsFavorite(false);
    } catch (error) {
      console.log("erro ao criar nota, ", error);
    }
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleAnnotationChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setAnnotation(e.target.value);
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    console.log(isFavorite);
  };

  return (
    <div id="create-note">
      <form id="create-note-form" onSubmit={createNewNote}>
        <div id="title-is-favorive">
          <input
            type="text"
            placeholder="Título"
            onChange={handleTitleChange}
            value={title}
            required
          />
          <div id="is-favorite-btn">
            {isFavorite ? (
              <LiaStarSolid className="favorite" onClick={toggleFavorite} />
            ) : (
              <IoMdStarOutline className="normal" onClick={toggleFavorite} />
            )}
          </div>
        </div>
        <textarea
          name="annotation"
          id="create-annotation-textarea"
          placeholder="Criar nota..."
          onChange={handleAnnotationChange}
          value={annotation}
          required
        ></textarea>
        <div id="create-note-btn-container">
          <button type="submit" id="create-note-btn">
            Criar
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateNote;
