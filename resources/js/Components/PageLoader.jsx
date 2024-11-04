import React from 'react';
import PropTypes from 'prop-types';
import BootstrapLayout from './BootstrapLayout';

export default function PageLoader({ message = "Gentleman's" }) {
  return (
    <BootstrapLayout>
        <div className="pageLoader">
        <div className="loader text-center w-full">
            <span>{message}</span>
            <span>{message}</span>
        </div>
        </div>
    </BootstrapLayout>
  );
}

PageLoader.propTypes = {
  message: PropTypes.string,
};
