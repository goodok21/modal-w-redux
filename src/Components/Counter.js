import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

class Counter extends Component {

  static propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { value, onIncrement, onDecrement } = this.props
    return (
      <p>
        <Button onClick={onIncrement}>
          +
        </Button>
        {value}
        <Button onClick={onDecrement}>
          -
        </Button>
      </p>
    )
  }

}

export default Counter

const Button = styled.button`
  font-size: 16px;
  font-weight: bold;
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem;
  margin: 0.5rem 1rem;
  background: palevioletred;
  color: white;
  border: 2px solid white;
`
