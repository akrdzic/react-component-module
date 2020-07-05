import React from 'react';
import 'Form.css';

export default ({ onSubmit, text }) => {
  const onSubmitClicked = () => {
    onSubmit();
  };

  return (<form className="form">
    <h4>{text}</h4>
    <label>
      Email:
      <input type="email" placeholder="Username" />
    </label>
    <label>
      Password:
      <input type="password" placeholder="Password" />
    </label>
    <button onClick={onSubmitClicked}>Log in</button>
  </form>);
};
