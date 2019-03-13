Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Styles = require('./Styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var defaultProps = {
  bgColor: '#ccc',
  textColor: '#fff',
  font: 'sans-serif',
  bgImg: ''
};

var FullHeader = function FullHeader(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      bgColor = _ref.bgColor,
      textColor = _ref.textColor,
      font = _ref.font,
      bgImg = _ref.bgImg,
      video = _ref.video;

  var headerStyleCombined = _extends({}, _Styles.headerStyle, {
    backgroundImage: 'url(' + String(bgImg) + ')',
    backgroundColor: bgColor,
    color: textColor,
    fontFamily: font
  });

  var component = _react2['default'].createElement(
    'header',
    { style: headerStyleCombined },
    _react2['default'].createElement(
      'div',
      { style: _Styles.containerStyle },
      title && _react2['default'].createElement(
        'h1',
        { style: _Styles.titleStyle },
        title
      ),
      subtitle && _react2['default'].createElement(
        'h2',
        { style: _Styles.subtitleStyle },
        subtitle
      )
    ),
    video && _react2['default'].createElement('video', { src: video, style: _Styles.videoStyle, autoPlay: true, muted: true, loop: true })
  );

  return component;
};

var propTypes = {
  title: _propTypes2['default'].string,
  subtitle: _propTypes2['default'].string,
  bgColor: _propTypes2['default'].string,
  textColor: _propTypes2['default'].string,
  font: _propTypes2['default'].string,
  bgImg: _propTypes2['default'].string,
  video: _propTypes2['default'].string
};

FullHeader.propTypes = propTypes;
FullHeader.defaultProps = defaultProps;

exports['default'] = FullHeader;