//styles
import { IoMdStarOutline } from "react-icons/io";
import "./styles.scss";

//icons

const CreateNote = () => {
  return (
    <div id="create-note">
      <form id="create-note-form">
        <div id="title-is-favorive">
          <input type="text" placeholder="Título" />
          <div id="is-favorite-btn">
            <IoMdStarOutline className="toggle-favorite" />
          </div>
        </div>
        <textarea
          name="annotation"
          id="create-annotation-input"
          placeholder="Criar nota..."
        ></textarea>
      </form>
    </div>
  );
};

export default CreateNote;
