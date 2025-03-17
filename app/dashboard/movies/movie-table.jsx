"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { EditMovieForm } from "./edit-movie-form";
import { DeleteMovieDialog } from "./delete-movie-dialog";
import { deleteMovie, updateMovie } from "@/actions/movie";

export function MovieTable({ movies }) {
  const [isSaving, setSaving] = useState(false);
  const [isDeleting, setDeleting] = useState(false);
  const [editingMovie, setEditingMovie] = useState(null);
  const [deletingRecord, setDeletingRecord] = useState(null);
  const router = useRouter();

  const handleEdit = (movie) => {
    setEditingMovie(movie);
  };

  const handleDelete = (movie) => {
    setDeletingRecord(movie);
  };

  const handleEditSubmit = async (movie) => {
    const { title, year, plot, rated, genres, poster, imdb } = movie;
    setSaving(true);
    const resp = await updateMovie(movie.id, {
      title,
      year,
      plot,
      rated,
      genres,
      poster,
      imdb,
    });
    setSaving(false);
    if (resp?.success) {
      setEditingMovie(null);
      router.refresh();
    }
  };

  const handleDeleteConfirm = async (movieId) => {
    setDeleting(true);
    const resp = await deleteMovie(movieId);
    setDeleting(false);
    if (resp?.success) {
      setDeletingRecord(null);
      router.refresh();
    }
  };

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-bold"># Cover</TableHead>
            <TableHead className="font-bold">Movie Title</TableHead>
            <TableHead className="font-bold">Year</TableHead>
            <TableHead className="font-bold">Rated</TableHead>
            <TableHead className="font-bold">IMDb</TableHead>
            <TableHead className="font-bold">Genres</TableHead>
            <TableHead className="font-bold text-end">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {movies.map((movie) => (
            <TableRow key={movie.id}>
              <TableCell>
                <Image
                  src={movie.poster ?? "/images/avatar.jpg"}
                  alt="Poster"
                  width={80}
                  height={160}
                  className="w-20 h-auto aspect-auto"
                  priority
                />
              </TableCell>
              <TableCell>
                <div className="min-w-64 text-pretty">{movie.title}</div>
              </TableCell>
              <TableCell>{movie.year}</TableCell>
              <TableCell>{movie.rated}</TableCell>
              <TableCell>{movie.imdb?.rating ?? 0}</TableCell>
              <TableCell>{movie.genres.join(", ")}</TableCell>
              <TableCell>
                <div className="flex justify-end space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="min-w-[120px]"
                    onClick={() => handleEdit(movie)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    className="min-w-[120px]"
                    onClick={() => handleDelete(movie)}
                  >
                    Delete
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {editingMovie && (
        <EditMovieForm
          movie={editingMovie}
          onSubmit={handleEditSubmit}
          onCancel={() => setEditingMovie(null)}
          isLoading={isSaving}
        />
      )}
      {deletingRecord && (
        <DeleteMovieDialog
          movie={deletingRecord}
          onConfirm={handleDeleteConfirm}
          onCancel={() => setDeletingRecord(null)}
          isLoading={isDeleting}
        />
      )}
    </div>
  );
}
