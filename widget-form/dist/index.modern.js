import React from 'react';
import 'Form.css';

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

export default Form;
//# sourceMappingURL=index.modern.js.map
