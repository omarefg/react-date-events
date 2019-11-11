import React from 'react';
import PropTypes from 'prop-types';
import {
  Select as MUSelect,
  InputLabel,
  MenuItem,
  FormControl,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  hourFormControl: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 'calc(50% - 16px)',
  },
  cityFormControl: {
    marginRight: theme.spacing(1),
    width: 'calc(100% - 8px)',
  },
}));

const Select = (props) => {
  const {
    options, label, value, onChange, labelId, className,
  } = props;
  const classes = useStyles();
  return (
    <FormControl
      className={classes[className]}
    >
      <InputLabel id={labelId}>{label}</InputLabel>
      <MUSelect
        labelId={labelId}
        value={value}
        onChange={onChange}
      >
        {options.map(({ value: itemValue, label: itemLabel, id }) => (
          <MenuItem
            value={itemValue}
            key={id}
          >
            {itemLabel}
          </MenuItem>
        ))}
      </MUSelect>
    </FormControl>
  );
};

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  })).isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  labelId: PropTypes.string.isRequired,
  className: PropTypes.oneOf(['hourFormControl', 'cityFormControl']).isRequired,
};


export default Select;
