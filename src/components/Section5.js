import React from 'react'
import styled from 'styled-components'
import Wave from './Wave'

export default function Section5(props) {
	return (
		<SectionGroup image={props.image}>
			<WaveTop>
				<Wave />
			</WaveTop>
			<SectionTitileGroup imgAr={props.imgARkit}>
				<SectionImg src={props.imgIphone2} />
			</SectionTitileGroup>
			<WaveBottom>
				<Wave />
			</WaveBottom>
		</SectionGroup>
	)
}

const SectionImg = styled.img`
	max-width: 800px;
	display: block;
	height: auto;
	margin: auto;
	position: relative;
	z-index: 4;
`

const WaveBottom = styled.div`
	position: absolute;
	width: 100%;
	bottom: -6px;
`
const WaveTop = styled.div`
	position: absolute;
	width: 100%;
	top: -6px;
	transform: rotate(180deg)
`
const SectionGroup = styled.div`
	margin: 400px 0 200px;
	background: url(${props => props.image});
	height: 585px;
	background-size: cover;
	display: grid;
	grid-gap: 20px;
	position: relative;

	@media (max-width: 640px) {
		height: 820px;
	}
`

const SectionTitileGroup = styled.div`
	position: relative;

	&::after {
		content: '';
		width: 130px;
		height: 130px;
		background-image: url(${props => props.imgAr});
		background-size: cover;
		background-position: center;
		position: absolute;
		top: -200px;
		left: 50%;
		transform: translateX(-50%);
		z-index: 5;
	}

`

const SectionTitle = styled.h3`
	background: linear-gradient(to right, #FFFFFF 0%, #B49396 100%);
	font-size: 60px;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	margin: 0;
	line-height: 1.2;

	@media (max-width: 720px) {
		font-size: 40px;
	}
`

const SectionText = styled.p`
	color: #fff;
`
