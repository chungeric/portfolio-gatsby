webpackJsonp([0xefeaa6d1881d],{201:function(e,t,i){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var r=i(2),o=a(r),l=i(18),c=(a(l),function(e){function t(i){s(this,t);var a=u(this,e.call(this,i));return a.fetchGithubData=a.fetchGithubData.bind(a),a.state={url:""},a}return n(t,e),t.prototype.fetchGithubData=function(){return new Promise(function(e,t){var i=new XMLHttpRequest;i.open("GET","https://api.github.com/users/chungeric"),i.onload=function(){return e(i.responseText)},i.onerror=function(){return t(i.statusText)},i.send()})},t.prototype.componentDidMount=function(){var e=this;this.fetchGithubData().then(function(t){var i=JSON.parse(t).avatar_url;e.setState({url:i})}).catch(function(e){console.log(e)})},t.prototype.render=function(){return o.default.createElement("section",{className:"about-page"},o.default.createElement("div",{className:"wrapper"},this.state.url&&o.default.createElement("img",{src:this.state.url,alt:"Avatar",className:"github-avatar"}),o.default.createElement("h1",{className:"page-title"},"A Bit About Me"),o.default.createElement("div",{className:"content"},this.state.url&&o.default.createElement("img",{src:this.state.url,alt:"Avatar",className:"github-avatar"}),o.default.createElement("div",{className:"text"},o.default.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac neque egestas, molestie felis id, lacinia nisl. Integer interdum lorem elit, eget dictum augue pharetra a. Vivamus feugiat diam eget ipsum ornare faucibus. Morbi sagittis non odio ac mollis. Suspendisse tristique ante a eleifend volutpat. Mauris ut sodales leo. Curabitur suscipit sit amet purus facilisis interdum. Duis finibus odio at tempus mollis."),o.default.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac neque egestas, molestie felis id, lacinia nisl. Integer interdum lorem elit, eget dictum augue pharetra a. Vivamus feugiat diam eget ipsum ornare faucibus. Morbi sagittis non odio ac mollis. Suspendisse tristique ante a eleifend volutpat. Mauris ut sodales leo. Curabitur suscipit sit amet purus facilisis interdum. Duis finibus odio at tempus mollis."),o.default.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac neque egestas, molestie felis id, lacinia nisl. Integer interdum lorem elit, eget dictum augue pharetra a. Vivamus feugiat diam eget ipsum ornare faucibus. Morbi sagittis non odio ac mollis. Suspendisse tristique ante a eleifend volutpat. Mauris ut sodales leo. Curabitur suscipit sit amet purus facilisis interdum. Duis finibus odio at tempus mollis.")))))},t}(r.Component));t.default=c,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-about-js-8f01c2e62db15fe38ea6.js.map