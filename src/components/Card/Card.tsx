import "./styles.scss";

import { IoMdStarOutline } from "react-icons/io";
import { LiaStarSolid } from "react-icons/lia";

interface CardProps {
  title: string;
  annotation: string;
  isFavorite?: boolean;
}

const Card = ({ title, annotation, isFavorite }: CardProps) => {
  console.log(title, annotation, isFavorite);
  return (
    <div className="card-notes">
      <form>
        <div>
          <input value={title} readOnly />
          <div>{isFavorite ? <LiaStarSolid /> : <IoMdStarOutline />}</div>
        </div>
        <textarea value={annotation} readOnly></textarea>
      </form>
    </div>
  );
};

export default Card;
