"use client";

import { useState } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function MovieCard({
  title,
  year,
  poster,
  plot,
  rated,
  imdb = { rating: 0 },
}) {
  const [posterUrl, setPosterUrl] = useState(poster);

  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <div className="group flex justify-center bg-black w-full h-[280px] mb-4 overflow-hidden">
          {poster && (
            <Image
              src={posterUrl}
              alt={title}
              width={200}
              height={400}
              className="h-full w-auto object-contain group-hover:scale-125 duration-500"
              priority
              onError={() => setPosterUrl("/images/movie-placeholder.png")}
            />
          )}
        </div>
      </CardHeader>
      <CardContent>
        <CardTitle className="text-pretty h-[36px] line-clamp-2 truncate mb-2">
          {title} <span className="text-neutral-400">({year})</span>
        </CardTitle>
        <div className="flex flex-col justify-between space-y-2">
          {/* Movie Plot */}
          <p className="h-[48px] line-clamp-3 text-xs">{plot}</p>
          {/* Movie Genres */}
          <div className="text-sm text-blue-900 font-semibold">
            Adventure/Fantasy
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-row justify-between items-center">
        <div className="flex flex-row gap-1 items-center" title="IMDb Rating">
          <FaStar className="text-yellow-500" />
          <span className="text-sm font-semibold">{imdb.rating}/10</span>
        </div>

        <Badge variant="success" className="font-medium">
          Rated: {rated ?? "N/A"}
        </Badge>
      </CardFooter>
    </Card>
  );
}
