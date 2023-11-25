import axios from "axios";
import { useState } from "react";
import MovieListItem from "@/components/movieListItem";
import CardRow from "@/components/cardRow";
import { Data, Genre } from "@/types/data";
import GenreListItem from "@/components/genreListItem";
import Navigation from "@/components/navigation";

export default function Home() {
  const [data, setData] = useState<Data>();
  const [genres, setGenres] = useState<Genre[]>();
  const popularRequest = {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/popular",
    params: { language: "en-US", page: "1" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMjVmMjdlN2NmYzQ4NGJhZTQyM2UxNDQyYjkxNmUxNiIsInN1YiI6IjY1NWU4ODIyN2RmZGE2MDExYmFlNTE2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vxBrfpC_Fz1HMbZ7IJTuytuDxGRHDC_fP0UPMowQQ7A",
    },
  };
  if (data === undefined) {
    axios
      .request(popularRequest)
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  const genreRequest = {
    method: "GET",
    url: "https://api.themoviedb.org/3/genre/movie/list",
    params: { language: "en" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMjVmMjdlN2NmYzQ4NGJhZTQyM2UxNDQyYjkxNmUxNiIsInN1YiI6IjY1NWU4ODIyN2RmZGE2MDExYmFlNTE2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vxBrfpC_Fz1HMbZ7IJTuytuDxGRHDC_fP0UPMowQQ7A",
    },
  };
  if (genres === undefined) {
    axios
      .request(genreRequest)
      .then(function (response) {
        setGenres(response.data?.genres);
      })
      .catch(function (error) {
        console.error(error);
      });
  }
  return (
    <main>
      <div className="max-w-7xl mx-auto ">
        <CardRow columns={7}>
          {genres &&
            genres?.map((genre) => (
              <GenreListItem
                key={genre.id}
                setData={setData}
                genre={genre}
                data={data}
              />
            ))}
        </CardRow>

        <CardRow columns={5}>
          {data?.results.map((movie, i) => (
            <MovieListItem key={i} movie={movie} />
          ))}
        </CardRow>
      </div>
    </main>
  );
}
