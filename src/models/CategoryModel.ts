export interface Category {
  title: string;
  description: string;
  imageUrl: string;
  movies: MoviesInterface[];
}

export interface MoviesInterface {
  title: string;
  description: string;
  imageUrl: string;
  urlVideo: string;
}
