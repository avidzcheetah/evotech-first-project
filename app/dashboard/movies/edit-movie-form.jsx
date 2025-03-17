"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { MultiSelect } from "@/components/multi-select";
import { GENRES, RATINGS } from "@/lib/constants";

export function EditMovieForm({ movie, onSubmit, onCancel, isLoading }) {
  const [title, setTitle] = useState(movie.title);
  const [year, setYear] = useState(movie.year);
  const [plot, setPlot] = useState(movie.plot);
  const [genres, setGenres] = useState(movie.genres);
  const [poster, setPoster] = useState(movie.poster);
  const [rated, setRated] = useState(movie.rated);
  const [imdbRating, setIMDbRating] = useState(movie.imdb?.rating ?? 0);

  const genresList = GENRES.map((genre) => ({
    label: genre,
    value: genre,
  }));

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...movie,
      title,
      year,
      genres,
      poster,
      rated,
      imdb: { rating: imdbRating },
    });
  };

  return (
    <Dialog open={true} onOpenChange={onCancel}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Movie</DialogTitle>
          <DialogDescription className="sr-only">
            Update movie dialog
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <Label htmlFor="title">Movie Title</Label>
              <Input
                id="title"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter the movie title"
              />
            </div>
            <div>
              <Label htmlFor="year">Movie Year</Label>
              <Input
                id="year"
                name="year"
                type="number"
                value={year}
                onChange={(e) => setYear(Number(e.target.value))}
                placeholder="Enter the year"
              />
            </div>
            <div>
              <Label htmlFor="plot">Movie Plot</Label>
              <Textarea
                id="plot"
                name="plot"
                value={plot}
                onChange={(e) => setPlot(e.target.value)}
                placeholder="Enter the movie plot"
              />
            </div>
            <div>
              <Label htmlFor="genres">Movie Genres</Label>
              <MultiSelect
                list={genresList}
                placeholder="Select movie genres"
                selectedItems={genres}
                onValueChange={setGenres}
              />
            </div>

            <div>
              <Label htmlFor="poster">Poster URL</Label>
              <Input
                id="poster"
                name="poster"
                type="text"
                value={poster}
                onChange={(e) => setPoster(e.target.value)}
                placeholder="Enter the poster URL"
              />
            </div>

            <div>
              <Label htmlFor="rated">Movie Rated</Label>
              <Select value={rated} onValueChange={(val) => setRated(val)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a rating" />
                </SelectTrigger>
                <SelectContent>
                  {RATINGS.map((rating) => (
                    <SelectItem key={rating} value={rating}>
                      {rating}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="imdb">IMDb Rating</Label>
              <Input
                id="imdb"
                name="imdb"
                max="10.0"
                step="0.1"
                type="number"
                value={imdbRating}
                onChange={(e) => setIMDbRating(Number(e.target.value))}
                placeholder="Enter imdb rating"
              />
            </div>

            <div className="w-full flex justify-end space-x-2">
              <Button type="button" variant="outline" onClick={onCancel}>
                Cancel
              </Button>
              <Button
                type="submit"
                className="min-w-[120px]"
                disabled={isLoading}
              >
                {isLoading && <Loader2 className="animate-spin" />} Save Changes
              </Button>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
