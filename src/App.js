import React, { Component } from "react";
import CountButton from "./components/CountButton";
import Number from "./components/Number";
import styled from "styled-components";

class App extends Component {
  state = {
    number: 0
  };

  // 1. state를 업데이트하는 함수를 전달
  countUp = () => {
    this.setState(({ number }) => ({
      number: number + 1
    }));
  };

  // 2. setState 함수 앞에서 값을 받고 이를 전달
  countDown = () => {
    const { number } = this.state;
    this.setState({ number: number - 1 });
  };

  render() {
    // Destructing Assignment 문법을 사용한 방식
    const { countUp, countDown } = this;
    const { number } = this.state;

    return (
			<Wrapper>
				<ButtonWrapper>
					<CountButton onClick={countUp} text="+" />
					<CountButton onClick={countDown} text="-" />
				</ButtonWrapper>
				<Number number={number} />
			</Wrapper>
    );
  }
}

export default App;