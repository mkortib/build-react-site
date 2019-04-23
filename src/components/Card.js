import React from 'react'
import './Card.css'

export default function Card(props) {
	return (
		<div className="Card">
			{props.status ? <span>{props.status}</span> : ''}
			<img src={props.image} alt=""/>
			<h3>{props.title}</h3>
			<p>{props.text}</p>
		</div>
	)
}

