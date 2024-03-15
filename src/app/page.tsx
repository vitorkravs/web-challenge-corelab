import CreateNote from "@/components/CreateNote/CreateNote";
import Header from "@/components/Header/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <CreateNote />
      </main>
    </>
  );
}
