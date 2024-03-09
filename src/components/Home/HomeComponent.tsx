import React from 'react';
import { Typography, Container, Card, CardHeader, CardMedia, Grid } from '@mui/material';
import { CATEGORY } from 'root-page';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { actualizarCategory } from 'store';
import { Category } from 'models';
import Navbar from 'components/Nabvar/Nabvar';
import { useTranslation } from 'react-i18next';
import { SIMULATE_MOVIES } from '__mocks__/simulateMovies';
import useStyles from './HomeStyles';

const HomeComponent: React.FC = () => {
  /**
   * Variable que maneja el uso de estilos.
   */
  const styles = useStyles();

  /**
   * Hook de react para rutas
   */
  const history = useHistory();

  /**
   * Dispatch redux
   */
  const dispatch = useDispatch();

  /**
   * Componente de traduccion i18n
   */
  const { t } = useTranslation();

  /**
   * Función encargada de darle funcionalidad a las cards al darle clic
   * @param category objeto que contiene la categoria seleccionada
   */
  const handleCard = (category: Category) => {
    dispatch(actualizarCategory(category));
    history.push(`${CATEGORY}?S=${category.title}`);
  };

  return (
    <div>
      <Navbar />
      <div className={styles.containerTitle}>
        <Typography className={styles.title}>{t('plays:paginas.plays.home.title')}</Typography>
      </div>

      <Container maxWidth="xl" className={styles.container}>
        <Grid container spacing={3} justifyContent="center">
          {SIMULATE_MOVIES.map(category => (
            <Grid item xs={12} sm={6} md={4} lg={2} key={`${category.title}key`}>
              <Card className={styles.card} onClick={() => handleCard(category)}>
                <CardHeader title={category.title} />
                <CardMedia className={styles.cardMedia} component="img" height="auto" image={category.imageUrl} alt={category.title} />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default HomeComponent;
