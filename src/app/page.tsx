import CreateNote from "@/components/CreateNote/CreateNote";
import Header from "@/components/Header/Header";
import ShowNotes from "@/components/ShowNotes/ShowNotes";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <CreateNote />
        <ShowNotes />
      </main>
    </>
  );
}
