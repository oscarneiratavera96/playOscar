import { createStyles, makeStyles, Theme } from '@material-ui/core';

const AppStyles = makeStyles((theme: Theme) =>
  createStyles({
    variantSuccess: {
      backgroundColor: 'green',
      fontWeight: 700,
    },
    variantError: {
      backgroundColor: 'red !important',
      fontWeight: 700,
      padding: '.625rem 9.375rem',
      [theme.breakpoints.down('sm')]: {
        padding: '.375rem 1rem .375rem 1.25rem',
      },
    },
    variantInfo: {
      backgroundColor: 'blue',
      fontWeight: 700,
    },
    variantWarning: {
      backgroundColor: 'yellow',
      fontWeight: 700,
    },
  })
);

export default AppStyles;
