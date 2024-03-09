import { CssBaseline } from '@material-ui/core';
import ContentCategory from 'components/ContentCategory/ContentCategory';
import { FC } from 'react';
import useStyles from './CategoryStyles';

const Category: FC = () => {
  /**
   * Variable que maneja el uso de estilos.
   */
  const styles = useStyles();

  return (
    <div className={styles.categoryPage}>
      <CssBaseline />
      <ContentCategory />
    </div>
  );
};

export default Category;
