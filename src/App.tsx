import { ThemeProvider } from '@material-ui/core';
import 'i18n/config';
import { SnackbarProvider } from 'notistack';
import { BrowserRouter } from 'react-router-dom';
import { createTheme } from '@material-ui/core/styles';
import { RootRouterConfig } from './navigation';
import useStyles from './AppStyles';

function App() {
  /**
   * Variable que maneja el uso de estilos.
   */
  const styles = useStyles();

  /**
   * Constante
   */
  const hideDuraton = 5000;

  const theme = createTheme({});

  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider
        classes={styles}
        maxSnack={6}
        autoHideDuration={hideDuraton}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <BrowserRouter>
          <RootRouterConfig />
        </BrowserRouter>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
