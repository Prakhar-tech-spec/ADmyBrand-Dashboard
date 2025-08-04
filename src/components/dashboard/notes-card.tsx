
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Plus, Trash2 } from 'lucide-react';
import { useAppToast } from '@/context/toaster-context';

type Note = {
  id: number;
  text: string;
};

export function NotesCard() {
  const [notes, setNotes] = useState<Note[]>([
    { id: 1, text: 'Meeting with the team at 10 AM.' },
    { id: 2, text: 'Finalize the quarterly report.' },
    { id: 3, text: 'Call John about the new project.' },
  ]);
  const [newNote, setNewNote] = useState('');
  const { toasterRef } = useAppToast();

  const handleAddNote = () => {
    if (newNote.trim() !== '') {
      setNotes([...notes, { id: Date.now(), text: newNote }]);
      setNewNote('');
    }
  };

  const handleDeleteNote = (id: number) => {
    const noteToDelete = notes.find((note) => note.id === id);
    if (!noteToDelete) return;

    const remainingNotes = notes.filter((note) => note.id !== id);
    setNotes(remainingNotes);

    toasterRef.current?.show({
        title: "Note Deleted",
        message: "The note has been successfully deleted.",
        variant: "success",
        actions: {
            label: "Undo",
            onClick: () => {
                setNotes(notes);
            },
            variant: "outline",
        }
    })
  };

  return (
    <Card className="shadow-sm rounded-3xl h-full">
      <CardHeader>
        <CardTitle>Notes</CardTitle>
        <CardDescription>Add or remove your notes</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col h-[calc(100%-80px)]">
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input
            type="text"
            placeholder="Add a new note..."
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAddNote()}
          />
          <Button type="submit" size="icon" onClick={handleAddNote}>
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        <ScrollArea className="flex-grow mt-4">
          <div className="space-y-2 pr-4">
            {notes.map((note) => (
              <div
                key={note.id}
                className="flex items-center justify-between p-3 rounded-lg bg-secondary"
              >
                <p className="text-sm text-secondary-foreground">{note.text}</p>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-muted-foreground"
                  onClick={() => handleDeleteNote(note.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
