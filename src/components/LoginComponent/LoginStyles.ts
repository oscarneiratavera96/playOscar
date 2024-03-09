import { createStyles, makeStyles, Theme } from '@material-ui/core';

const HomeStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      gap: '30px',
    },
    container: {
      padding: '20px',
      background: '#fff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '24px',
      boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    },
    containerWelcome: {
      display: 'flex',
      maxWidth: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(1),
    },
    submit: {
      fontSize: '20px !important',
      borderRadius: '24px !important',
      marginTop: '10px !important',
    },
    textWelcome: {
      fontSize: '40px !important',
      fontWeight: 'bold',
      color: '#fff',
    },
    containerButton: {
      display: 'flex',
      justifyContent: 'center',
    },
    textLogin: {
      fontSize: '20px !important',
    },
  })
);

export default HomeStyles;
