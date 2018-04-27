import React, { Component } from 'react';
import {
	Container,
	Row,
	Col,
	Input,
	InputGroup,
	InputGroupAddon,
	InputGroupText,
	Button,
	Card,
	CardHeader,
	CardTitle,
	CardText
} from 'reactstrap';
import './App.css';
import PostsComponent from './components/PostsComponent';
// import logo from './logo.svg';

class App extends Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			inputTextValue: "",
			posts: []
		};

		// this.onPost = this.onPost.bind(this);
		// this.onTextChange = this.onTextChange.bind(this);
	}

	onPost = () => {
		let tempPosts = Object.assign([], this.state.posts);

		tempPosts.push({
			id: tempPosts.length,
			text: this.state.inputTextValue
		});

		this.setState({
			inputTextValue: "",
			posts: tempPosts
		});
	}

	onTextChange = (event) => {
		this.setState({
			inputTextValue: event.target.value
		});
	}

	render() {
		return (
			<Container>
				<Row>
					<Col sm={{ size: 6, offset: 3 }}>
						<div className='panel'>
							<div className='panel-heading'>To-do</div>
							<div className='panel-body'>
								<InputGroup>
									<Input value={this.state.inputTextValue} onChange={this.onTextChange} />
									<InputGroupAddon addonType="append">
										<Button onClick={this.onPost} color="success" default='true'>Post</Button>
									</InputGroupAddon>
								</InputGroup>
							</div>
						</div>
					</Col>
				</Row>
				<br />
				<Row>
					<Col sm={{ size: 6, offset: 3 }}>
						<PostsComponent posts={this.state.posts} />
					</Col>
				</Row>
			</Container>
		);
	}
}

export default App;
