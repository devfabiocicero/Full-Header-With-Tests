import React from 'react';
import PropTypes from 'prop-types';

const defaultProps = {
  bgColor: '#ccc',
  textColor: '#fff',
  font: 'sans-serif',
  bgImg: '',
};

const FullHeader = ({ title, subtitle, bgColor, textColor, font, bgImg }) => {
  const headerStyles = {
    backgroundImage: `url(${bgImg})`,
    backgroundColor: bgColor,
    color: textColor,
    fontFamily: font,
  };

  const component = (
    <header style={headerStyles}>
      {title && <h1>{title}</h1>}
      {subtitle && <h2>{subtitle}</h2>}
    </header>
  );

  return component;
};

const propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  font: PropTypes.string,
  bgImg: PropTypes.string,
};

FullHeader.propTypes = propTypes;
FullHeader.defaultProps = defaultProps;

export default FullHeader;
