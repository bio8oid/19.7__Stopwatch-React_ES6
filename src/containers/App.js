import React from 'react';
import { hot } from 'react-hot-loader';
import style from './App.css';


class Stopwatch extends React.Component {
	constructor() {
		super();
 
		this.state = {
			isRunning: false,
			runningTime: {
				minutes: 0,
				seconds: 0,
				miliseconds: 0
			}
		}
	}

	startTimer = () => {
			this.myTimer = setInterval(this.timeIsRunning, 10)
		}
  
	stopTimer = () => {
		clearInterval(this.myTimer);
		this.setState({
			isRunning: false
		})
	}

	resetTimer = () => {
		this.setState({
      runningTime: {
				minutes: 0,
				seconds: 0,
				miliseconds: 0
			} 
		});
	}

	timeIsRunning = () => {
    
    const currentRunningTime = this.state.runningTime;
		currentRunningTime.miliseconds++;
		if (currentRunningTime.miliseconds >= 100) {
			currentRunningTime.seconds++ ,
			currentRunningTime.miliseconds = 0
		}
		if (currentRunningTime.seconds >= 60) {
			currentRunningTime.minutes++ ,
			currentRunningTime.seconds = 0
		}
		this.setState({
			runningTime: currentRunningTime
		})
	}

	render = () => {
		return (
			<div className='controls'>
				<button onClick = {this.startTimer}>START</button>
				<button onClick = {this.stopTimer}>STOP</button>
				<button onClick = {this.resetTimer}>RESET</button>
          		<div className='stopwatch'>{this.format(this.state.runningTime)}</div>
			</div>
		)
	}

	format = times => {
		return `${pad0(times.minutes)}:${pad0(times.seconds)}:${pad0(times.miliseconds)}`;
	};
}

function pad0(value) {
		let result = value.toString();
		if (result.length < 2) {
			result = '0' + result;
		}
		return result;
	};


export default hot(module)(Stopwatch);