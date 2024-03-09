import { createStyles, makeStyles } from '@material-ui/core';

const HomeStyles = makeStyles(() =>
  createStyles({
    containerLogout: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: '5px',
      marginLeft: 'auto',
    },

    appBar: {
      backgroundColor: '#000 !important',
    },
    sesionText: {
      cursor: 'pointer',
      fontSize: '20px!important',
      color: '#fff',
    },

    sesionBanner: {
      cursor: 'pointer',
    },
  })
);

export default HomeStyles;
