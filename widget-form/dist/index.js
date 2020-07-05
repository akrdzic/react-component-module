function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
require('Form.css');

var Form = (function (_ref) {
  var onSubmit = _ref.onSubmit,
      text = _ref.text;

  var onSubmitClicked = function onSubmitClicked() {
    onSubmit();
  };

  return /*#__PURE__*/React.createElement("form", {
    className: "form"
  }, /*#__PURE__*/React.createElement("h4", null, text), /*#__PURE__*/React.createElement("label", null, "Email:", /*#__PURE__*/React.createElement("input", {
    type: "email",
    placeholder: "Username"
  })), /*#__PURE__*/React.createElement("label", null, "Password:", /*#__PURE__*/React.createElement("input", {
    type: "password",
    placeholder: "Password"
  })), /*#__PURE__*/React.createElement("button", {
    onClick: onSubmitClicked
  }, "Log in"));
});

module.exports = Form;
//# sourceMappingURL=index.js.map
