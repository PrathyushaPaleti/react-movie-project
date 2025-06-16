import React from 'react';

class NumericComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.initialValue || 0,
    };

    // Bind the event handlers
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState((prevState) => ({
      value: prevState.value + 1,
    }));
  }
  decrement() {
    this.setState((prevState) => ({
      value: prevState.value - 1,
    }));
  }

  render() {
    return React.createElement(
      'div',
      { style: { textAlign: 'center', marginTop: '20px' } },
      React.createElement(
        'p',
        null,
        `Value: ${this.state.value}`
      ),
      React.createElement(
        'button',
        { onClick: this.decrement, style: { marginRight: '10px' } },
        'Decrement'
      ),
      React.createElement(
        'button',
        { onClick: this.increment },
        'Increment'
      )
    );
  }
}

export default NumericComponent;