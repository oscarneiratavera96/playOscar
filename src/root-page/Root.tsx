import { CssBaseline } from '@material-ui/core';
import Routes from './navigation/RouterConfig';
import useStyles from './RootStyles';

const Root = ({ path }: { path: string }) => {
  /**
   * Variable que maneja el uso de estilos.
   */
  const styles = useStyles();

  return (
    <section className={styles.plays}>
      <CssBaseline />
      <section className={styles.content}>
        <Routes path={path} />
      </section>
    </section>
  );
};

export default Root;
