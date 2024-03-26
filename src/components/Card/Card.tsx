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
  color?: string;
}

const Card = ({
  id,
  title: initialTitle,
  annotation: initialAnnotation,
  isFavorite: initialIsFavorite,
  color,
}: CardProps) => {
  const { updateNote, updateIsFavorite, deleteNote, toggleColor } = useNotes();
  const [editColor, setEditColor] = useState(false);
  const [title, setTitle] = useState(initialTitle);
  const [annotation, setAnnotation] = useState(initialAnnotation);
  const [isFavorite, setIsFavorite] = useState(initialIsFavorite);
  const [backgroundColor, setBackgroundColor] = useState(color);

  const handleChangeBackgroundColor = async (color: string) => {
    await toggleColor({ id, color });
    setBackgroundColor(color);
    setEditColor(false);
  };

  const toggleEditColor = () => {
    setEditColor(!editColor);
  };

  const handleSave = async () => {
    await updateNote({ id, title, annotation, isFavorite });
  };

  const handleIsFavorite = async () => {
    await updateIsFavorite({ id, isFavorite: !isFavorite });
    setIsFavorite(!isFavorite);
  };

  const handleDeleteNote = async () => {
    await deleteNote(id);
  };
  return (
    <div className="card-notes" style={{ backgroundColor: backgroundColor }}>
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
            <button className="edit-color-card" onClick={toggleEditColor}>
              <LuPaintBucket />
            </button>
          </div>
          <div
            className="bg-color-card-container"
            style={editColor ? { display: "grid" } : { display: "none" }}
          >
            <div
              className="bg-color-card bg-color-card-one"
              onClick={() => handleChangeBackgroundColor("#bae2ff")}
            />
            <div
              className="bg-color-card bg-color-card-two"
              onClick={() => handleChangeBackgroundColor("#b9ffdd")}
            />
            <div
              className="bg-color-card bg-color-card-three"
              onClick={() => handleChangeBackgroundColor("#ffe8ac")}
            />
            <div
              className="bg-color-card bg-color-card-four"
              onClick={() => handleChangeBackgroundColor("#ffcab9")}
            />
            <div
              className="bg-color-card bg-color-card-five"
              onClick={() => handleChangeBackgroundColor("#f99494")}
            />
            <div
              className="bg-color-card bg-color-card-six"
              onClick={() => handleChangeBackgroundColor("#9dd6ff")}
            />
            <div
              className="bg-color-card bg-color-card-seven"
              onClick={() => handleChangeBackgroundColor("#eca1ff")}
            />
            <div
              className="bg-color-card bg-color-card-eight"
              onClick={() => handleChangeBackgroundColor("#daff8b")}
            />
            <div
              className="bg-color-card bg-color-card-nine"
              onClick={() => handleChangeBackgroundColor("#ffa285")}
            />
            <div
              className="bg-color-card bg-color-card-ten"
              onClick={() => handleChangeBackgroundColor("#CDCDCD")}
            />
            <div
              className="bg-color-card bg-color-card-twelve"
              onClick={() => handleChangeBackgroundColor("#979797")}
            />
            <div
              className="bg-color-card bg-color-card-thirteen"
              onClick={() => handleChangeBackgroundColor("#fff")}
            />
          </div>
          <div className="remove-card-btn">
            <button className="remove-card" onClick={handleDeleteNote}>
              <IoMdClose />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Card;
