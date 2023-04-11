import React from 'react';
import Element from './components/element';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Stack() {
  const [value, setValue] = React.useState('');
  const [currpop, setPop] = React.useState('');
  const [currtop, setTop] = React.useState('');
  const [stack, setStack] = React.useState([]);

  const handleChange = (event) => {
    var curr = event.target.value;
    setValue(curr);
  };

  const getTop = () => {
    if (stack.length === 0) {
      alert('Stack is empty');
      return;
    }
    var top = stack[stack.length - 1];
    setTop(top);
  };

  const push = () => {
    if (value === '') {
      alert('Please enter a value');
      return;
    }
    setStack([...stack, value]);
  };

  const pop = () => {
    if (stack.length === 0) {
      alert('Stack is empty');
      return;
    }
    var top = stack[stack.length - 1];
    var arr = stack.slice(0, stack.length - 1);
    setStack(arr);
    setPop(top);
  };

  return (
    <div className="container">
      <h1 className="header">Stack</h1>
      <div className="row">
        <div className="col md-6 stack">
          {stack.map((item, index) => (
            <Element key={index} value={item} />
          ))}
        </div>
        <div className="col md-3 operation">
          <h2>Operations</h2>
          <div className="input-group push">
            <button onClick={push} className="btn btn-outline-secondary" type="button" id="button-addon2">
              PUSH
            </button>
            <input type="text" value={value} onChange={handleChange} className="form-control" />
          </div>
          <div className="input-group pop">
            <button onClick={pop} className="btn btn-outline-secondary" type="button" id="button-addon2">
              POP
            </button>
            <input type="text" disabled value={currpop} className="form-control" />
          </div>
          <div className="input-group top">
            <button onClick={getTop} className="btn btn-outline-secondary" type="button" id="button-addon2">
              TOP
            </button>
            <input type="text" disabled value={currtop} className="form-control" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stack;
