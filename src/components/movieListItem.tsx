import { useRouter } from "next/router";
import React, { FC } from "react";

type Props = {
  movie: any;
};

const MovieListItem: FC<Props> = ({ movie }) => {
  const router = useRouter();

  return (
    <div
      className="flex hover:brightness-50 hover:scale-105"
      onClick={() =>
        router.push({
          pathname: `/${movie.id}`,
          query: {
            id: movie.id,
          },
        })
      }
    >
      <picture>
        <img
          src={`http://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
          alt=""
        />
      </picture>
    </div>
  );
};

export default MovieListItem;
