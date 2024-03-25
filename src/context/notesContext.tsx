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

  const getNotes = async () => {
    try {
      const response = await axios.get("http://192.168.2.105:3333/api/notes");
      setNotes(response.data);
    } catch (error) {
      console.error("Erro ao buscar notas", error);
    }
  };

  const createNewNote = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://192.168.2.105:3333/api/notes/post",
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

  const updateNote = async ({ id, title, annotation, isFavorite }: Note) => {
    try {
      const response = await axios.put(
        `http://192.168.2.105:3333/api/notes/update/${id}`,
        {
          title,
          annotation,
          isFavorite,
        }
      );
      console.log("Nota atualizada:", response.data); //
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
        `http://192.168.2.105:3333/api/notes/toggleIsFavorite/${id}`,
        {
          isFavorite,
        }
      );
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
        `http://192.168.2.105:3333/api/notes/delete/${id}`
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
    toggleFavorite,
    handleTitleChange,
    handleAnnotationChange,
    updateIsFavorite,
  };

  return (
    <NotesContext.Provider value={value}> {children} </NotesContext.Provider>
  );
};
