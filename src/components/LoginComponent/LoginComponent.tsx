import { FC, useEffect, useState } from 'react';
import { useForm, SubmitHandler, SubmitErrorHandler, FieldValues } from 'react-hook-form';
import { Button, TextField, Typography, Container, CssBaseline, Avatar, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { actualizarEstadoLogin } from 'store';
import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';
import { HOME } from 'root-page';
import { LoginForm } from 'models';
import { simulateLogin } from '__mocks__/simulateLogin';
import useStyles from './LoginStyles';

// Define el tipo de datos del formulario

const LoginComponent: FC = () => {
  /**
   * Variable que maneja el uso de estilos.
   */
  const styles = useStyles();

  /**
   * Componente de traduccion i18n
   */
  const { t } = useTranslation();

  /**
   * Hook de react para rutas
   */
  const history = useHistory();

  /**
   * Dispatch redux
   */
  const dispatch = useDispatch();

  /**
   * Uso de snackbar
   */
  const { enqueueSnackbar } = useSnackbar();

  // Configuración react-hook-form
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
    trigger,
  } = useForm<LoginForm>();

  // Estado para controlar la visibilidad de la contraseña
  const [showPassword, setShowPassword] = useState(false);

  // Función para manejar el cambio de visibilidad de la contraseña
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Función para manejar el envío del formulario
  const onSubmit: SubmitHandler<LoginForm> = data => {
    if (data.email === simulateLogin.user && data.password === simulateLogin.password) {
      dispatch(actualizarEstadoLogin({ estadoLogin: true }));
      localStorage.setItem('user', 'sesionActive');
      history.push(HOME);
    } else {
      enqueueSnackbar(t('errors:plays.loginInvalid'), { variant: 'error' });
    }
  };

  // Función para manejar errores en el envío del formulario
  const onError: SubmitErrorHandler<FieldValues> = errores => {
    console.error(errores);
  };

  useEffect(() => {
    // Verifica si hay información de usuario en el localStorage
    const storedUser = localStorage.getItem('user');

    if (storedUser) {
      // Actualiza el estado de inicio de sesión en Redux
      dispatch(actualizarEstadoLogin({ estadoLogin: true }));

      // Redirige a la página de inicio
      history.push(HOME);
    }
  }, [dispatch, history]);

  return (
    <div>
      <Container component="main" maxWidth="sm">
        <CssBaseline />

        <div className={styles.paper}>
          <div className={styles.containerWelcome}>
            <Typography className={styles.textWelcome}>{t('plays:paginas.plays.login.welcomeMessage')}</Typography>
          </div>
          <div className={styles.container}>
            <Avatar sx={{ bgcolor: 'orange' }}>{t('plays:paginas.plays.login.form.initialAvatar')}</Avatar>
            <Typography className={styles.textLogin}>{t('plays:paginas.plays.login.form.title')}</Typography>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit, onError)}>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="email"
                label={t('plays:paginas.plays.login.form.email')}
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...register('email', {
                  required: t('errors:plays.inputRequerid'),
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: t('errors:plays.emailInvalid'),
                  },
                })}
                error={!!errors.email}
                helperText={errors.email?.message}
                onBlur={() => trigger('email')}
              />
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="password"
                label={t('plays:paginas.plays.login.form.password')}
                type={showPassword ? 'text' : 'password'}
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...register('password', { required: t('errors:plays.inputRequerid') })}
                error={!!errors.password}
                helperText={errors.password?.message}
                onBlur={() => trigger('password')}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={togglePasswordVisibility} edge="end">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <div className={styles.containerButton}>
                <Button type="submit" variant="contained" color="primary" className={styles.submit} disabled={!isValid}>
                  {t('plays:paginas.plays.login.form.submit')}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LoginComponent;
