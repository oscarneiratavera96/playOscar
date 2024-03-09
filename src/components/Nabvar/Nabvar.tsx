import { AppBar, Toolbar, Typography } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { actualizarCategory, actualizarEstadoLogin, actualizarMovie } from 'store';
import { HOME, LOGIN } from 'root-page';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import useStyles from './NavbarStyles';

const Navbar = () => {
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
   * Función controladora de cerrar sesión
   */
  const handleLogout = () => {
    // Elimina la información del usuario del localStorage
    localStorage.removeItem('user');
    dispatch(actualizarEstadoLogin({ estadoLogin: false }));
    dispatch(actualizarCategory({ title: '', description: '', imageUrl: '', movies: [] }));
    dispatch(actualizarMovie({ title: '', description: '', imageUrl: '', urlVideo: '' }));
    history.push(LOGIN);
  };
  /**
   * Función controladora el clic banner
   */
  const handleHome = () => {
    history.push(HOME);
  };

  return (
    <AppBar position="static" className={styles.appBar}>
      <Toolbar>
        <Typography variant="h6" className={styles.sesionBanner} onClick={handleHome}>
          {t('plays:paginas.plays.nabvar.title')}
        </Typography>
        <div className={styles.containerLogout}>
          <AccountCircle />
          <Typography className={styles.sesionText} onClick={handleLogout}>
            {t('plays:paginas.plays.nabvar.sesion')}
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
