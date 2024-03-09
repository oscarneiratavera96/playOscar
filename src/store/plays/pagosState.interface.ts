import { Category, MoviesInterface } from 'models';

export interface PLaysState {
  movies: Category;
  movie: MoviesInterface;
  estadoLogin: boolean;
}
