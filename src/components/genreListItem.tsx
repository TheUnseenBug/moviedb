import { Data, Genre } from "@/types/data";
import axios from "axios";
import React, { FC, useEffect, useState } from "react";

type Props = {
  genre: Genre;
  setData: (e: Data) => void;
  data?: Data;
};

const GenreListItem: FC<Props> = ({ genre, setData }) => {
  const [genres, setGenres] = useState<Genre[]>([]);

  useEffect(() => {
    const popularRequest = {
      method: "GET",
      url: `https://api.themoviedb.org/3/discover/movie?with_genres=${genre.id}`,
      params: { language: "en-US", page: "1" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMjVmMjdlN2NmYzQ4NGJhZTQyM2UxNDQyYjkxNmUxNiIsInN1YiI6IjY1NWU4ODIyN2RmZGE2MDExYmFlNTE2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vxBrfpC_Fz1HMbZ7IJTuytuDxGRHDC_fP0UPMowQQ7A",
      },
    };
    if (genres.length > 0) {
      axios
        .request(popularRequest)
        .then(function (response) {
          setData(response.data);
          console.log(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  }, [setGenres, genres]);
  return (
    <div className="flex w-full hover:brightness-50 hover:scale-105">
      <button
        className="rounded w-full bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={() => setGenres([...genres, genre])}
      >
        {genre.name}
      </button>
    </div>
  );
};

export default GenreListItem;
