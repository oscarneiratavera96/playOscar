import { createStyles, makeStyles, Theme } from '@material-ui/core';

const ContentCategoryStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      backgroundColor: '#000 !important',
      color: '#fff !important',
      boxShadow:
        'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
      '&:hover': {
        transform: 'rotate(1deg) scale(1.1)',
      },
      [theme.breakpoints.down('sm')]: {
        '&:hover': {
          transform: 'none',
        },
      },
    },
    cardMedia: {
      fontSize: '20px !important',
      fontColor: '#fff !important',
      color: '#fff !import',
      fontStyle: 'normal',
    },
    container: {
      marginTop: '50px !important',
    },
    containerTitle: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 'auto',
      justifyContent: 'center',
      marginTop: '50px !important',
    },
    title: {
      fontSize: '40px!important',
      fontWeight: 'bold',
      color: '#fff',
    },
  })
);

export default ContentCategoryStyles;
