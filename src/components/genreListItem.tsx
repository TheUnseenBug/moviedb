import { Data, Genre } from "@/types/data";
import axios from "axios";
import classNames from "classnames";
import React, { FC, useEffect, useState } from "react";

type Props = {
  genre: Genre;
  setData: (e: Data) => void;
  data?: Data;
};

const GenreListItem: FC<Props> = ({ genre, setData }) => {
  const [search, setSearch] = useState<Genre>();

  useEffect(() => {
    const popularRequest = {
      method: "GET",
      url: `https://api.themoviedb.org/3/discover/movie?with_genres=${search?.id}`,
      params: { language: "en-US", page: "1" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMjVmMjdlN2NmYzQ4NGJhZTQyM2UxNDQyYjkxNmUxNiIsInN1YiI6IjY1NWU4ODIyN2RmZGE2MDExYmFlNTE2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vxBrfpC_Fz1HMbZ7IJTuytuDxGRHDC_fP0UPMowQQ7A",
      },
    };

    axios
      .request(popularRequest)
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [setSearch, search, setData]);
  console.log(search);
  return (
    <div className="flex justify-center w-full hover:brightness-50 hover:scale-105">
      <button
        className={classNames(
          `rounded w-full bg-indigo-${
            search?.id == genre.id ? 500 : 600
          } px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500`
        )}
        onClick={() => setSearch(search?.id === genre.id ? undefined : genre)}
      >
        {genre.name}
      </button>
    </div>
  );
};

export default GenreListItem;
