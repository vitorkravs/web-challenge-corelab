//styles
import "./styles.scss";

//image
import Image from "next/image";

//icons
import { AiOutlineClose } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";

const Header = () => {
  return (
    <header id="header">
      <div id="logo-search-container">
        <div id="logo">
          <Image
            alt="Logo do WebApp"
            src={"/corenote-logo.png"}
            width={30}
            height={30}
          />
          <h1>CoreNotes</h1>
        </div>
        <div id="search">
          <form id="search-annotations">
            <input type="text" placeholder="Pesquisar notas" />
            <button type="submit" aria-label="Fechar">
              <IoIosSearch />
            </button>
          </form>
        </div>
      </div>
      <div id="header-close">
        <AiOutlineClose />
      </div>
    </header>
  );
};

export default Header;