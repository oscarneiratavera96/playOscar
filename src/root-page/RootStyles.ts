import { createStyles, makeStyles } from '@material-ui/core';

const RootStyles = makeStyles(() =>
  createStyles({
    plays: {
      background: 'linear-gradient(90deg, rgba(17,0,52,1) 0%, rgba(99,13,237,1) 62%, rgba(32,0,64,1) 100%)',
      minHeight: '100vh',
      border: '0px !important',
      padding: '0px !important',
    },

    content: {
      display: 'flex',
      flexDirection: 'column',
      zIndex: 1,
      paddingBottom: '0',
      minHeight: '100vh',
    },
  })
);

export default RootStyles;
