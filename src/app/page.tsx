import CreateNote from "@/components/CreateNote/CreateNote";
import Header from "@/components/Header/Header";
import ShowNotes from "@/components/ShowNotes/ShowNotes";
import { NotesProvider } from "@/context/notesContext";

export default function Home() {
  return (
    <NotesProvider>
      <Header />
      <main>
        <CreateNote />
        <ShowNotes />
      </main>
    </NotesProvider>
  );
}
