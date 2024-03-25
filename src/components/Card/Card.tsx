"use client";

//styles
import "./styles.scss";

//icons
import { FaPencilAlt } from "react-icons/fa";
import { IoMdClose, IoMdStarOutline } from "react-icons/io";
import { LiaStarSolid } from "react-icons/lia";
import { LuPaintBucket } from "react-icons/lu";

//hooks
import { useState } from "react";

//context
import { useNotes } from "@/context/notesContext";

interface CardProps {
  id: string;
  title: string;
  annotation: string;
  isFavorite: boolean;
}

const Card = ({
  id,
  title: initialTitle,
  annotation: initialAnnotation,
  isFavorite: initialIsFavorite,
}: CardProps) => {
  const { updateNote, updateIsFavorite } = useNotes();
  const [title, setTitle] = useState(initialTitle);
  const [annotation, setAnnotation] = useState(initialAnnotation);
  const [isFavorite, setIsFavorite] = useState(initialIsFavorite);

  const handleSave = async () => {
    await updateNote({ id, title, annotation, isFavorite });
  };

  const handleIsFavorite = async () => {
    await updateIsFavorite({ id, isFavorite: !isFavorite });
    setIsFavorite(!isFavorite);
  };
  return (
    <div className="card-notes">
      <form className="form-card" onSubmit={(e) => e.preventDefault()}>
        <div className="title-is-favorite-card">
          <input
            className="title-input-card"
            defaultValue={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="is-favorite-icon-card" onClick={handleIsFavorite}>
            {isFavorite ? (
              <LiaStarSolid className="favorite-note" />
            ) : (
              <IoMdStarOutline className="normal-note" />
            )}
          </div>
        </div>
        <textarea
          className="textarea-card"
          defaultValue={annotation}
          onChange={(e) => setAnnotation(e.target.value)}
        ></textarea>
        <div className="edit-card">
          <div className="edit-and-color">
            <button className="edit-btn-card" onClick={handleSave}>
              <FaPencilAlt />
            </button>
            <button className="edit-color-card">
              <LuPaintBucket />
            </button>
          </div>
          <div className="remove-card-btn">
            <button className="remove-card">
              <IoMdClose />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Card;
