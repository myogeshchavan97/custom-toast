import React, { useState } from 'react';
import Toast from './components/Toast';

const App = () => {
  const [show, setShow] = useState(false);

  const showToast = () => {
    setShow(true);
  };

  const hideToast = () => {
    setShow(false);
  };

  return (
    <div className="App">
      <Toast show={show} hideToast={hideToast}>
        This is some text
      </Toast>
      <a href="/#" onClick={showToast} className={`${show && 'disabled'}`}>
        Show Toast
      </a>
    </div>
  );
};

export default App;
