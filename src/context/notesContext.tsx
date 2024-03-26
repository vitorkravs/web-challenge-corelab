"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import axios from "axios";

interface Note {
  id: string;
  title: string;
  annotation: string;
  isFavorite: boolean;
  color?: string;
}

interface UpdateIsFavoriteProps {
  id: string;
  isFavorite: boolean;
}

interface NotesContextType {
  notes: Note[];
  getNotes: () => void;
  deleteNote: (id: string) => Promise<void>;
  createNewNote: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  updateNote: ({ id, title, annotation, isFavorite }: Note) => Promise<void>;
  title: string;
  annotation: string;
  isFavorite: boolean;
  toggleFavorite: () => void;
  handleTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAnnotationChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  updateIsFavorite: ({
    id,
    isFavorite,
  }: UpdateIsFavoriteProps) => Promise<void>;
  toggleColor: ({ id, color }: { id: string; color: string }) => Promise<void>;
  searchTerm: string;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  filteredNotes: Note[];
  filteredFavoriteNotes: Note[];
}

const NotesContext = createContext<NotesContextType | undefined>(undefined);

export const useNotes = () => {
  const context = useContext(NotesContext);
  if (context === undefined) {
    throw new Error("useNotes deve ser usado dentro de um NotesProvider");
  }
  return context;
};

interface NotesProviderProps {
  children: ReactNode;
}

export const NotesProvider: React.FC<NotesProviderProps> = ({ children }) => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [title, setTitle] = useState("");
  const [annotation, setAnnotation] = useState("");
  const [isFavorite, setIsFavorite] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredNotes, setFilteredNotes] = useState<Note[]>([]);
  const [filteredFavoriteNotes, setFilteredFavoriteNotes] = useState<Note[]>(
    []
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredNotes(notes);

      const notesFavorite = notes.filter((note) => note.isFavorite);
      setFilteredFavoriteNotes(notesFavorite);
    } else {
      // Filtra as notas baseado no searchTerm
      const filtered = notes.filter(
        (note) =>
          note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          note.annotation.toLowerCase().includes(searchTerm.toLowerCase())
      );

      const filteredFavorites = notes.filter(
        (note) =>
          (note.isFavorite &&
            note.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
          note.annotation.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredNotes(filtered);
      setFilteredFavoriteNotes(filteredFavorites);
    }
  }, [notes, searchTerm]);

  const getNotes = async () => {
    try {
      const response = await axios.get("http://192.168.2.103:3333/api/notes");
      setNotes(response.data);
    } catch (error) {
      console.error("Erro ao buscar notas", error);
    }
  };

  const createNewNote = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://192.168.2.103:3333/api/notes/post",
        {
          title: title,
          annotation: annotation,
          is_favorite: isFavorite,
        }
      );
      setTitle("");
      setAnnotation("");
      setIsFavorite(false);
      getNotes();
    } catch (error) {
      console.log("erro ao criar nota, ", error);
    }
  };

  const toggleColor = async ({ id, color }: { id: string; color: string }) => {
    try {
      const response = await axios.patch(
        `http://192.168.2.103:3333/api/notes/toggleColor/${id}`,
        {
          color,
        }
      );
    } catch (error) {
      console.error("Erro ao atualizar a nota", error);
    }
  };

  const updateNote = async ({ id, title, annotation, isFavorite }: Note) => {
    try {
      const response = await axios.put(
        `http://192.168.2.103:3333/api/notes/update/${id}`,
        {
          title,
          annotation,
          isFavorite,
        }
      );
    } catch (error) {
      console.error("Erro ao atualizar a nota", error);
    }
  };

  const updateIsFavorite = async ({
    id,
    isFavorite,
  }: UpdateIsFavoriteProps) => {
    try {
      const response = await axios.patch(
        `http://192.168.2.103:3333/api/notes/toggleIsFavorite/${id}`,
        {
          isFavorite,
        }
      );
      console.log(response.status, response.data);
      getNotes();
    } catch (error) {
      console.error("Erro ao atualizar", error);
    }
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleAnnotationChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setAnnotation(e.target.value);
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const deleteNote = async (id: string) => {
    try {
      const response = await axios.delete(
        `http://192.168.2.103:3333/api/notes/delete/${id}`
      );
      getNotes();
    } catch (error) {
      console.error("Erro ao atualizar", error);
    }
  };

  const value = {
    getNotes,
    createNewNote,
    updateNote,
    deleteNote,
    notes,
    title,
    annotation,
    isFavorite,
    searchTerm,
    toggleFavorite,
    handleTitleChange,
    handleAnnotationChange,
    updateIsFavorite,
    toggleColor,
    handleSearchChange,
    filteredNotes,
    filteredFavoriteNotes,
  };

  return (
    <NotesContext.Provider value={value}> {children} </NotesContext.Provider>
  );
};
