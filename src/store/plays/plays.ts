import { createSlice } from '@reduxjs/toolkit';
import { PLaysState } from './pagosState.interface';

const initialState: PLaysState = {
  movies: {
    title: '',
    description: '',
    imageUrl: '',
    movies: [],
  },
  movie: { title: '', description: '', imageUrl: '', urlVideo: '' },
  estadoLogin: false,
};

export const pagosSlice = createSlice({
  name: 'plays',
  initialState,
  reducers: {
    actualizarEstadoLogin: (state, action) => {
      state.estadoLogin = action.payload.estadoLogin;
    },
    actualizarCategory: (state, action) => {
      state.movies = action.payload;
    },
    actualizarMovie: (state, action) => {
      state.movie = action.payload;
    },
  },
});

export const { actualizarEstadoLogin, actualizarCategory, actualizarMovie } = pagosSlice.actions;

export default pagosSlice.reducer;
