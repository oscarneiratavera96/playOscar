import React from 'react';
import { Typography, Container, Card, CardMedia, Grid } from '@mui/material';
import { MOVIE } from 'root-page';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, actualizarMovie } from 'store';
import Navbar from 'components/Nabvar/Nabvar';
import { QueryParams } from 'config';
import { SIMULATE_MOVIES } from '__mocks__/simulateMovies';
import { MoviesInterface } from 'models';
import useStyles from './ContentCategoryStyles';

const ContentCategory: React.FC = () => {
  /**
   * Variable que maneja el uso de estilos.
   */
  const styles = useStyles();

  /**
   * Hook de react para rutas
   */
  const history = useHistory();

  /**
   * Variable que maneja query params
   */
  const query = QueryParams();

  /**
   * valor de la categoria obtenido por query params
   */
  const categoria = query.get('S');

  /**
   * Filtro por categoria
   */
  const selectedCategory = SIMULATE_MOVIES.find(category => category.title === categoria);

  /**
   * Dispatch redux
   */
  const dispatch = useDispatch();

  /**
   * Variable que maneja la data de las categorias
   */
  const movies = useSelector((state: RootState) => state.plays.movies);

  /**
   * Variable con el que se pintara las peliculas
   */
  const playsMovies = movies.movies[1] ? movies : selectedCategory;

  /**
   * Función encargada de darle funcionalidad a las cards al darle clic
   * @param movies objeto que contiene la pelicula
   */
  const handleCard = (movie: MoviesInterface) => {
    dispatch(actualizarMovie(movie));
    history.push(`${MOVIE}?t=${movie.urlVideo}`);
  };

  return (
    <div>
      <Navbar />
      <div className={styles.containerTitle}>
        <Typography className={styles.title}>{movies.title}</Typography>
      </div>

      <Container maxWidth="xl" className={styles.container}>
        <Grid container spacing={3} justifyContent="center">
          {playsMovies?.movies.map(category => (
            <Grid item xs={12} sm={6} md={4} lg={2} key={`${category.title}key`}>
              <Card className={styles.card} onClick={() => handleCard(category)}>
                <CardMedia className={styles.cardMedia} component="img" height="auto" image={category.imageUrl} alt={category.title} />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default ContentCategory;
