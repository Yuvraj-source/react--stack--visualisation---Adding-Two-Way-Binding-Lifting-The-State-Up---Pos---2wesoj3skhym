import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Element from './components/element';

function App() {
  const [stack, setStack] = useState([]);

  const handlePush = () => {
    const value = document.getElementById('push-input').value.trim();
    if (value !== '') {
      setStack([...stack, value]);
      document.getElementById('push-input').value = '';
    }
  };

  const handlePop = () => {
    if (stack.length === 0) {
      window.alert('Stack is empty');
      return;
    }
    const poppedValue = stack.pop();
    setStack([...stack]);
    document.getElementById('pop-input').value = poppedValue;
  };

  const handleTop = () => {
    if (stack.length === 0) {
      window.alert('Stack is empty');
      return;
    }
    const topValue = stack[stack.length - 1];
    document.getElementById('top-input').value = topValue;
  };

  return (
    <div className="container">
      <h1 className="header">Stack</h1>
      <div className="row">
        <div className="col md-6 stack">
          {stack.map((value, index) => (
            <Element key={index} value={value} />
          ))}
        </div>
        <div className="col md-3 operation">
          <h2>Operations</h2>
          <div className="input-group push">
            <button className="btn btn-outline-secondary" type="button" onClick={handlePush}>
              PUSH
            </button>
            <input type="text" className="form-control" id="push-input" />
          </div>
          <div className="input-group pop">
            <button className="btn btn-outline-secondary" type="button" onClick={handlePop}>
              POP
            </button>
            <input type="text" disabled className="form-control" id="pop-input" />
          </div>
          <div className="input-group top">
            <button className="btn btn-outline-secondary" type="button" onClick={handleTop}>
              TOP
            </button>
            <input type="text" disabled className="form-control" id="top-input" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
