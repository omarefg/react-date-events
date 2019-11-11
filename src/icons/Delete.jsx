import React from 'react';
import PropTypes from 'prop-types';

const Delete = ({ size }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
  >
    <g transform="translate(0 -1028.4)">
      <path
        fill="#c0392b"
        d="M22 1041.4c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10 10 4.477 10 10z"
      />
      <path
        fill="#e74c3c"
        d="M22 1040.4c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10 10 4.477 10 10z"
      />
      <path
        fill="#c0392b"
        d="M6 1039.4H18V1043.4H6z"
      />
      <path
        fill="#ecf0f1"
        d="M6 1039.4H18V1042.4H6z"
      />
    </g>
  </svg>
);

Delete.propTypes = {
  size: PropTypes.string.isRequired,
};

export default Delete;
