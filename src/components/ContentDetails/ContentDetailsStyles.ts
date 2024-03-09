import { createStyles, makeStyles } from '@material-ui/core';

const ContentDetailsStyles = makeStyles(() =>
  createStyles({
    card: {
      backgroundColor: '#000 !important',
      color: '#fff !important',
      boxShadow:
        'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
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
      textAlign: 'center',
      fontSize: '40px!important',
      fontWeight: 'bold',
      color: '#fff',
    },

    description: {
      fontSize: '20px!important',
      color: '#DADADA !important',
      marginBottom: '20px !important',
    },
  })
);

export default ContentDetailsStyles;
