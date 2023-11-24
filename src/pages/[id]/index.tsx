import { Movie } from "@/types/data";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Index = () => {
  const [movie, setMovie] = useState<Movie>();
  const router = useRouter();
  const id = router.query.id;
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${id}`,
    params: { include_adult: "false", language: "en-US", page: "1" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMjVmMjdlN2NmYzQ4NGJhZTQyM2UxNDQyYjkxNmUxNiIsInN1YiI6IjY1NWU4ODIyN2RmZGE2MDExYmFlNTE2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vxBrfpC_Fz1HMbZ7IJTuytuDxGRHDC_fP0UPMowQQ7A",
    },
  };

  if (movie === undefined) {
    axios
      .request(options)
      .then(function (response) {
        setMovie(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }
  console.log(movie);
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-white font-semibold mx-2 pt-2 text-2xl text-center">
        {movie?.title}
      </h1>
      <picture className="flex justify-center my-5">
        <img
          src={`http://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
          alt=""
        />
      </picture>
      {movie?.genres.map((genre, i) => (
        <div key={i} className="text-white mx-2 text-xl">
          {genre?.name}
        </div>
      ))}
      <p className="text-white mx-2 text-xl">{movie?.adult}</p>
      <p className="text-white mx-2 text-xl">{movie?.overview}</p>
      <p className="text-white mx-2 text-xl">{movie?.release_date}</p>
      <p className="text-white mx-2 text-xl">{movie?.status}</p>
      <p className="text-white mx-2 text-xl">{movie?.revenue}</p>
      {movie?.production_companies?.map((company) => (
        <div key={company?.id}>
          <h1 className="text-white mx-2 text-xl">{company?.name}</h1>
          <p className="text-white mx-2 text-xl">{company?.origin_country}</p>
        </div>
      ))}
    </div>
  );
};

export default Index;
