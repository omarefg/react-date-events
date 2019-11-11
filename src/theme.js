import { createMuiTheme } from '@material-ui/core';

export default createMuiTheme({
  overrides: {
    MuiInputBase: {
      root: {
        color: 'white',
      },
      input: {
        color: 'white',
      },
    },
    MuiFormLabel: {
      root: {
        color: 'white',
      },
    },
    MuiFormControl: {
      root: {
        width: 'calc(100% - 8px)',
      },
    },
  },
  typography: {
    fontFamily: '\'Raleway\', sans-serif',
  },
  palette: {
    primary: {
      main: '#2fb570',
    },
  },
});
