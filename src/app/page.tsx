import CreateNote from "@/components/CreateNote/CreateNote";
import Header from "@/components/Header/Header";
import FavoriteNotes from "@/components/FavoriteNotes/FavoriteNotes";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <CreateNote />
        <FavoriteNotes />
      </main>
    </>
  );
}
