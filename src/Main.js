import React from 'react';
import PropTypes from 'prop-types';
import { titleStyle, subtitleStyle, headerStyle, containerStyle, videoStyle } from './Styles';

const defaultProps = {
  bgColor: '#ccc',
  textColor: '#fff',
  font: 'sans-serif',
  bgImg: '',
};

const FullHeader = ({ title, subtitle, bgColor, textColor, font, bgImg, video }) => {
  const headerStyleCombined = {
    ...headerStyle,
    backgroundImage: `url(${bgImg})`,
    backgroundColor: bgColor,
    color: textColor,
    fontFamily: font,
  };

  const component = (
    <header style={headerStyleCombined}>
      <div style={containerStyle}>
        {title && <h1 style={titleStyle}>{title}</h1>}
        {subtitle && <h2 style={subtitleStyle}>{subtitle}</h2>}
      </div>
      {video && <video src={video} style={videoStyle} autoPlay muted loop />}
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
  video: PropTypes.string,
};

FullHeader.propTypes = propTypes;
FullHeader.defaultProps = defaultProps;

export default FullHeader;
