import Link from "next/link";
import { LayoutDashboard } from "lucide-react";
import { getMovies } from "@/lib/apis/server";
import { Button } from "@/components/ui/button";
import MovieCard from "./movie-card";

export default async function MoviesPublicPage() {
  const movies = await getMovies();

  if (!movies) {
    return null;
  }

  return (
    <div className="container space-y-4 my-12">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-3xl font-bold text-primary-500">Browse Movies</h1>
        <Link href="/dashboard/movies">
          <Button variant="secondary">
            <LayoutDashboard />
            Go to Dashboard
          </Button>
        </Link>
      </div>
      {movies ? (
        <div className="grid grid-cols-4 gap-4">
          {movies?.length &&
            movies.map((movie) => <MovieCard key={movie._id} {...movie} />)}
        </div>
      ) : (
        <div>
          <h1 className="text-center text-red-600 font-bold text-xl">
            Oops! Something went wrong.
          </h1>
        </div>
      )}
    </div>
  );
}
