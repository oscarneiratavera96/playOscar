import { CssBaseline } from '@material-ui/core';
import { HomeComponent } from 'components';
import { FC } from 'react';
import useStyles from './HomeStyles';

const Home: FC = () => {
  /**
   * Variable que maneja el uso de estilos.
   */
  const styles = useStyles();

  return (
    <div className={styles.homePage}>
      <CssBaseline />
      <HomeComponent />
    </div>
  );
};

export default Home;
