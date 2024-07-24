import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import styles from './Button.module.css';

function Button({ id, variant = '', children, type, handleclick }) {
  return (
    <button
      id={id}
      className={clsx(
        styles.button,
        variant === 'prim' && styles.prim,
        variant === 'sec' && styles.sec,
        variant === 'third' && styles.third
      )}
      type={type}
      onClick={handleclick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  handleclick: PropTypes.func,
};

export default Button;
