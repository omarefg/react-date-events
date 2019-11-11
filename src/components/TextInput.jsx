import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  titleTextField: {
    marginRight: theme.spacing(1),
    width: 'calc(100% - 16px)',
  },
}));

const TextInput = (props) => {
  const {
    value,
    onChange,
    multiline,
    rowsMax,
    inputProps,
    label,
  } = props;

  const classes = useStyles();

  return (
    <TextField
      value={value}
      className={classes.titleTextField}
      onChange={onChange}
      multiline={multiline}
      rowsMax={rowsMax}
      inputProps={{ ...inputProps }}
      label={label}
    />
  );
};

TextInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  multiline: PropTypes.bool,
  rowsMax: PropTypes.string,
  inputProps: PropTypes.shape({}),
  label: PropTypes.string.isRequired,
};

TextInput.defaultProps = {
  multiline: false,
  rowsMax: '1',
  inputProps: {},
};

export default TextInput;
