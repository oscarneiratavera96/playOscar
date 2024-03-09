import React from 'react';
import { Typography, Container, Card, CardMedia, Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import Navbar from 'components/Nabvar/Nabvar';
import { SIMULATE_MOVIES } from '__mocks__/simulateMovies';
import { QueryParams } from 'config';
import VideoPlayer from 'components/VideoPlayer/VideoPlayer';
import useStyles from './ContentDetailsStyles';

const ContentDetails: React.FC = () => {
  /**
   * Variable que maneja el uso de estilos.
   */
  const styles = useStyles();

  /**
   * Variable que maneja query params
   */
  const query = QueryParams();

  /**
   * valor de la pelicula obtenido por query params
   */
  const urlVideoParam = query.get('t');

  const selectedMovie = SIMULATE_MOVIES.flatMap(category => category.movies).find(movie => movie.urlVideo === urlVideoParam) ?? {
    title: '',
    description: '',
    imageUrl: '',
    urlVideo: '',
  };

  /**
   * Variable obteniado del redux que contiene la información de la pelicula
   */
  const movie = useSelector((state: RootState) => state.plays.movie);

  /**
   * Variable con el que se pintara las peliculas
   */
  const playsMovie = movie.urlVideo !== '' ? movie : selectedMovie;

  return (
    <div>
      <Navbar />
      <div className={styles.containerTitle}>
        <Typography className={styles.title}>{playsMovie.title}</Typography>
      </div>
      <Container maxWidth="xl" className={styles.container}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Card className={styles.card}>
              <CardMedia className={styles.cardMedia} component="img" height="auto" image={playsMovie.imageUrl} alt={playsMovie.title} />
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={8} lg={8}>
            <Typography className={styles.description}>{playsMovie.description}</Typography>
            <VideoPlayer videoId={playsMovie.urlVideo} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ContentDetails;
