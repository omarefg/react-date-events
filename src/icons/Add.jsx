import React from 'react';
import PropTypes from 'prop-types';

const Add = ({ size }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
  >
    <path
      fill="#27ae60"
      d="M22 1041.4c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10 10 4.477 10 10z"
      transform="translate(0 -1028.4)"
    />
    <path
      fill="#2ecc71"
      d="M22 1040.4c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10 10 4.477 10 10z"
      transform="translate(0 -1028.4)"
    />
    <path
      fill="#27ae60"
      d="M6 1042.4h5v5h2v-5h5v-2h-5v-5h-2v5H6v2z"
      transform="translate(0 -1028.4)"
    />
    <path
      fill="#ecf0f1"
      d="M6 1041.4h5v5h2v-5h5v-2h-5v-5h-2v5H6v2z"
      transform="translate(0 -1028.4)"
    />
  </svg>
);

Add.propTypes = {
  size: PropTypes.string.isRequired,
};

export default Add;
