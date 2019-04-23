import React from 'react'
import styled from 'styled-components'

export default function Cell(props) {
	return (
		<CellGroup>
			<CellImage image={props.image} className={props.style}></CellImage>
			<CellTitle>{props.title}</CellTitle>
		</CellGroup>
	)
}

const CellGroup = styled.div`
	display: grid;
	grid-template-columns: 60px auto;
	grid-gap: 25px;
	align-items: center;
`

const CellImage = styled.div`
	width: 60px;
	height: 60px;
	border-radius: 10px;
	position: relative;
	top: 0;
	transition: top .5s ease;
	
	&:hover {
		top: -5px;
		box-shadow: 0 5px 10px rgba(0,0,0,.3);
		cursor: pointer;
	}

	&.react-itm1 {
		background: linear-gradient(to bottom right, #3672F8 0%, #9B51E0 100%)
	}

	&.react-itm2 {
		background: linear-gradient(to bottom right, #A6193B 0%, #9B51E0 100%)
	}

	&.react-itm3 {
		background: #9B51E0;
	}

	&.react-itm4 {
		background: linear-gradient(to bottom right, #3B4661 0%, #6D389F 100%)
	}

	&.react-itm5 {
		background: linear-gradient(to bottom right, #3672F8 0%, #9B51E0 100%)
	}

	&.react-itm6 {
		background: linear-gradient(to bottom right, #1DB3B3 0%, #9B51E0 100%)
	}

	&.react-itm7 {
		background: linear-gradient(to bottom right, #9C6A6A 0%, #9B51E0 100%)
	}

	&.react-itm8 {
		background: linear-gradient(to bottom right, #223868 0%, #9B51E0 100%)
	}

	&.react-itm9 {
		background: linear-gradient(to bottom right, #3672F8 0%, #4F0892 100%)
	}

	&.react-itm10 {
		background: linear-gradient(to bottom right, #1E3C80 0%, #008DFF 100%)
	}

	&.react-itm11 {
		background: linear-gradient(to bottom right, #702616 0%, #9B51E0 100%)
	}
	
	&.react-itm12 {
		background: linear-gradient(to bottom right, #F836C2 0%, #9B51E0 100%)
	}

	&::after {
		z-index: 5;
		position: absolute;
		width: 30px;
		height: 26px;
		content: '';
		transform: translate(-50%, -50%);
		top: 50%;
		left: 50%;
		background-image: url(${props => props.image});
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	}

`

const CellTitle = styled.div`
	font-size: 24px;
	border-bottom: 1px solid rgba(0, 0, 0, .1);
	padding: 30px 0;
	transition: color .3s ease;

	&:hover {
		cursor: pointer;
		color: #9B51E0;
	}
`