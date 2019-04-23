import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

export default class Footer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: props.dataFoot.edges,
			col1: props.dataFoot.edges.filter(({node}) => { return node.category === "Main" }),
			col2: props.dataFoot.edges.filter(({node}) => { return node.category === "Downloads" }),
			col3: props.dataFoot.edges.filter(({node}) => { return node.category === "Community" })
		}
	}	

	render() {

		return (
			<FooterGroup>
				<Text>Tweet “Prototype and build apps with React and Swift. New courses by @MengTo”</Text>
				<Button>Tweet</Button>
				<LinkGroup>
					<Links>
						<span>Main</span>
						{
							this.state.col1.map(({node}) => {
								return <Link to={node.url}>{node.title}</Link>
							})
						}
					</Links>
					<Links>
					<span>Downloads</span>
						{
							this.state.col2.map(({node}) => {
								return <Link to={node.url}>{node.title}</Link>
							})
						}
					</Links>
					<Links>
					<span>Community</span>
						{
							this.state.col3.map(({node}) => {
								return <Link to={node.url}>{node.title}</Link>
							})
						}
					</Links>
				</LinkGroup>
				<Copywrite>{this.props.children}</Copywrite>
			</FooterGroup>
		)
	}
}

const Links = styled.div`
	display: grid;

	a {
		padding: 5px 0;
	}

	span {
		font-size: 18px;
		text-transform: uppercase;
		color: #94A4BA;
		font-weight: 600;
		padding: 0 0 11px 0;
	}
`


const FooterGroup = styled.div`
	background-color: #f1f3f5;
	padding: 50px 0;
	display: grid;
	grid-gap: 20px;
`

const Text = styled.p`
	font-size: 24px;
	font-weight: 600;
	color: #486791;
	max-width: 500px;
	text-align: center;
	margin: 0 auto 20px;
`

const Button = styled.button`
	background: linear-gradient(102.24deg, #9b51e0 0%, #3436e7 100%);
	box-shadow: 0 10px 20px rgba(101, 41, 255, .15);
	border-radius: 30px;
	color: #fff;
	border: none;
	padding: 16px 60px;
	font-weight: 600;
	font-size: 24px;
	justify-self: center;
	transition: .8s cubic-bezier(.2, .8, .2, 1);

	&:hover {
		box-shadow: 0 20px 40px rgba(0,0,0,.15);
		transform: translateY(-3px);
	}
`

const LinkGroup = styled.div`
	max-width: 1000px;
	width: 100%;
	margin: 50px auto;
	display: grid;
	grid-template-columns: repeat(3, 200px);
	grid-gap: 10px;
	justify-content: space-between;

	a {
		transition: .8s;

		&:hover {
			color: black;
		}
	}
`
const Copywrite = styled.div`
	color: #486791;
	max-width: 550px;
	text-align: center;
	margin: 0 auto;
	padding: 0 20px;
	font-size: 16px;
`