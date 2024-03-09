import { CssBaseline } from '@material-ui/core';
import ContentDetails from 'components/ContentDetails/ContentDetails';
import { FC } from 'react';
import useStyles from './MovieStyles';

const Category: FC = () => {
  /**
   * Variable que maneja el uso de estilos.
   */
  const styles = useStyles();

  return (
    <div className={styles.moviePage}>
      <CssBaseline />
      <ContentDetails />
    </div>
  );
};

export default Category;
