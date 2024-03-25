"use client";

//styles
import "./styles.scss";

//icons
import { IoMdStarOutline } from "react-icons/io";
import { LiaStarSolid } from "react-icons/lia";
import { useNotes } from "@/context/notesContext";

const CreateNote = () => {
  const {
    createNewNote,
    handleAnnotationChange,
    handleTitleChange,
    toggleFavorite,
    title,
    isFavorite,
    annotation,
  } = useNotes();

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
