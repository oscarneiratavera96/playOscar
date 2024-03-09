import { createStyles, makeStyles } from '@material-ui/core';

const HomeStyles = makeStyles(() =>
  createStyles({
    loginPage: {
      background: 'linear-gradient(90deg, rgba(17,0,52,1) 0%, rgba(99,13,237,1) 62%, rgba(32,0,64,1) 100%)',
    },
  })
);

export default HomeStyles;
