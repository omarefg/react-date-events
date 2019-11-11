import React from 'react';
import PropTypes from 'prop-types';

const CloseReminderArea = ({ size }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 455 455"
  >
    <path
      d="M227.5 0C101.855 0 0 101.855 0 227.5S101.855 455 227.5 455 455 353.145 455 227.5 353.145 0 227.5 0zm-28.024 355.589l-21.248-21.178L284.791 227.5 178.228 120.589l21.248-21.178L327.148 227.5 199.476 355.589z"
    />
  </svg>
);

CloseReminderArea.propTypes = {
  size: PropTypes.string.isRequired,
};

export default CloseReminderArea;
