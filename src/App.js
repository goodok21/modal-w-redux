import React, { Component } from 'react';
import styled, {css, keyframes} from 'styled-components';
import { connect } from 'react-redux'

import Counter from './Components/Counter'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      isOpenHelper: false
    }
  }

  openModal() {
    this.setState({
      isOpen: true,
      isOpenHelper: true
    })
    // isOpenHelper - I dont wanna use setTimeout
  }

  closeModal() {
    this.setState({
      isOpen: false
    })
  }

  render() {
    console.log(this.props);
    return (
      <Bg>
        <Button primary onClick={ () => { this.openModal() }}>Open modal</Button>
        <Modal isOpen={this.state.isOpen} isOpenHelper={this.state.isOpenHelper}>
          <ModalContent>
            <Counter
              value={this.props.value}
              onIncrement={() => this.props.dispatch({ type: 'INC' })}
              onDecrement={() => this.props.dispatch({ type: 'DEC' })}
            />
            <ModalCloseButton onClick={ () => { this.closeModal() }}>&times;</ModalCloseButton>
          </ModalContent>
        </Modal>
      </Bg>
    );
  }
}

function mapStateToProps(state) {
  return { value: state };
}

export default connect(mapStateToProps)(App);

const Bg = styled.div`
  background-color: #eee;
  width: 100%;
  min-height: 100vh;
  text-align: center;
  padding: 2vw;
`

const Button = styled.button`
  font-size: 16px;
  font-weight: bold;
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;

  ${props => props.primary && css`
    background: white;
    color: palevioletred;
  `}
`

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const fadeOut = keyframes`
  from {
    opacity: 1;
    visibility: visible;
  }
  to {
    visibility: hidden;
    opacity: 0;
  }
`

const Modal = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.4);
  visibility: hidden;
  ${props => props.isOpen && css`
    visibility: visible;
    animation: ${fadeIn} 1s linear;
  `}
  ${props => (!props.isOpen && props.isOpenHelper) && css`
    visibility: hidden;
    animation: ${fadeOut} 1s linear;
  `}
`;

const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
  position: relative;
`
const ModalCloseButton = styled.span`
  color: #aaa;
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
  font-size: 28px;
  line-height: 20px;
  font-weight: bold;
`
