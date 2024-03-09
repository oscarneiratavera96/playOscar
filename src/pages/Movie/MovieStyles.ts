import { createStyles, makeStyles, Theme } from '@material-ui/core';

const MovieStyles = makeStyles((theme: Theme) =>
  createStyles({
    moviePage: {
      background: 'linear-gradient(90deg, rgba(17,0,52,1) 0%, rgba(99,13,237,1) 62%, rgba(32,0,64,1) 100%)',
      minHeight: '100vh',
      [theme.breakpoints.down('sm')]: {
        marginBottom: '30px',
      },
    },
  })
);

export default MovieStyles;
