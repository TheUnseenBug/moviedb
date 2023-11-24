export type Movie = {
  adult: string;
  backdrop_path: string;
  genre_ids: string[];
  id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  status: string;
  revenue?: string;
  production_companies?: {
    id: string;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
  genres: { id: string; name: string }[];
};

export type Data = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export type Genre = {
  id: string;
  name: string;
};
