import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, FormGroup, Input, Form, ListGroup, ListGroupItem, Badge } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends React.Component {

	state = { h1: '', array: [] };
	onChangeText = (event) => {
		this.setState({
			h1: event.target.value
		})
	}
	onAddArray = () => {
		if (this.state.h1 === '') {
			alert('Cannot be empty');
		}
		else {
			let tempList = Object.assign([], this.state.array);
			tempList.push(this.state.h1);
			this.setState({
				array: tempList,
				h1: ''
			});
		}
	}
	onClearText = () => {
		this.setState({
			h1: ''
		})
	}
	onRemoveText = (index) => {
		let tempList = Object.assign([], this.state.array);
		tempList.splice(index, 1);
		this.setState({ array: tempList })
	}
	onClearList = () => {
		this.setState({
			array: []
		})
	}
	render() {
		return (
			<div>
				<div className="App">
					<header className="App-header">
						<img src={logo} className="App-logo" alt="logo" />
						<h1 className="App-title">Welcome to React</h1>
					</header>
					<p></p>

					<div className='container'>
						<Form >
							<FormGroup>
								<Input type="text" value={this.state.h1} onChange={this.onChangeText} />
								<Button outline color='primary' onClick={this.onAddArray}>Add</Button>
								<Button outline color='info' onClick={this.onClearText}>Clear</Button>
								<Button outline color='danger' onClick={this.onClearList}>Clear all List</Button>

							</FormGroup>
						</Form>
					</div>
				</div>
				<footer>
					<ListComponent
						h1={this.state.h1}
						onRemoveText={this.onRemoveText}
						array={this.state.array} />
				</footer>

			</div>
		);
	}
}

const ListComponent = (props) => {
	return (
		<div className='container'>
			<ListGroup>
				{props.array.map((x, i) => {
					return <ListGroupItem className="justify-content-between" key={i} color='info' tag='button'><Badge pill className='pull-right' onClick={() => props.onRemoveText(i)}>x</Badge>  {x}  </ListGroupItem>
				})}
			</ListGroup>
		</div>
	);
}
export default App;
