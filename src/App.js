import React, { Component } from 'react';

class App extends Component {
	state = { number: 0 }

	// 1. state를 업데이트하는 함수를 전달
	countUp = () => {
		this.setState(
			({ number }) => ({
				number: number + 1
			})
		);
	}

	// 2. setState 함수 앞에서 값을 받고 이를 전달
	countDown = () => {
		const { number } = this.state
		this.setState({ number: number - 1 });
	}

	render() {
		// Destructuring Assignment 문법을 사용한 방식
		const { number } = this.state;
		const { countUp, countDown } = this;

		return (
			<div>
				<div>
					<button onClick={countUp}>+</button>
					<button onClick={countDown}>-</button>
				</div>
				{this.state.number}
			</div>
		)
	}
}

export default App;