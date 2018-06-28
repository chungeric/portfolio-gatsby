webpackJsonp([263791100135453],{

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var fetchGithubAvatarUrl = function () {
	  var _ref = _asyncToGenerator(function* () {
	    var response = yield fetch('https://api.github.com/users/chungeric');
	    var data = yield response.json();
	    return data.avatar_url;
	  });
	
	  return function fetchGithubAvatarUrl() {
	    return _ref.apply(this, arguments);
	  };
	}();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _gatsbyLink = __webpack_require__(18);
	
	var _gatsbyLink2 = _interopRequireDefault(_gatsbyLink);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	var AboutPage = function (_Component) {
	  _inherits(AboutPage, _Component);
	
	  function AboutPage(props) {
	    _classCallCheck(this, AboutPage);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
	    _this.state = { url: '' };
	    return _this;
	  }
	
	  AboutPage.prototype.componentDidMount = function componentDidMount() {
	    var _this2 = this;
	
	    fetchGithubAvatarUrl().then(function (url) {
	      _this2.setState({ url: url });
	    });
	  };
	
	  AboutPage.prototype.render = function render() {
	    return _react2.default.createElement(
	      'section',
	      { className: 'about-page' },
	      _react2.default.createElement(
	        'div',
	        { className: 'wrapper' },
	        this.state.url && _react2.default.createElement('img', { src: this.state.url, alt: 'Avatar', className: 'github-avatar' }),
	        _react2.default.createElement(
	          'h1',
	          { className: 'page-title' },
	          'A Bit About Me'
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'content' },
	          this.state.url && _react2.default.createElement('img', { src: this.state.url, alt: 'Avatar', className: 'github-avatar' }),
	          _react2.default.createElement(
	            'div',
	            { className: 'text' },
	            _react2.default.createElement(
	              'p',
	              null,
	              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac neque egestas, molestie felis id, lacinia nisl. Integer interdum lorem elit, eget dictum augue pharetra a. Vivamus feugiat diam eget ipsum ornare faucibus. Morbi sagittis non odio ac mollis. Suspendisse tristique ante a eleifend volutpat. Mauris ut sodales leo. Curabitur suscipit sit amet purus facilisis interdum. Duis finibus odio at tempus mollis.'
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac neque egestas, molestie felis id, lacinia nisl. Integer interdum lorem elit, eget dictum augue pharetra a. Vivamus feugiat diam eget ipsum ornare faucibus. Morbi sagittis non odio ac mollis. Suspendisse tristique ante a eleifend volutpat. Mauris ut sodales leo. Curabitur suscipit sit amet purus facilisis interdum. Duis finibus odio at tempus mollis.'
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac neque egestas, molestie felis id, lacinia nisl. Integer interdum lorem elit, eget dictum augue pharetra a. Vivamus feugiat diam eget ipsum ornare faucibus. Morbi sagittis non odio ac mollis. Suspendisse tristique ante a eleifend volutpat. Mauris ut sodales leo. Curabitur suscipit sit amet purus facilisis interdum. Duis finibus odio at tempus mollis.'
	            )
	          )
	        )
	      )
	    );
	  };
	
	  return AboutPage;
	}(_react.Component);
	
	exports.default = AboutPage;
	module.exports = exports['default'];

/***/ })

});
//# sourceMappingURL=component---src-pages-about-js-9f77e177d83028f37a79.js.map