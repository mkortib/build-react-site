import React from 'react'
import styled from 'styled-components'
import Wave from './Wave'

export default function Section(props) {
	return (
		<SectionGroup image={props.image}>
			<WaveTop>
				<Wave />
			</WaveTop>
			<SectionLogo src={props.logo}/>
			<SectionTitileGroup>
				<SectionTitle>{props.title}</SectionTitle>
				<SectionText>{props.text}</SectionText>
			</SectionTitileGroup>
			<WaveBottom>
				<Wave />
			</WaveBottom>
		</SectionGroup>
	)
}

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
	background: url(${props => props.image});
	height: 720px;
	background-size: cover;
	display: grid;
	grid-template-rows: 300px auto;
	grid-gap: 20px;
	position: relative;

	@media (max-width: 640px) {
		height: 820px;
	}
`

const SectionLogo = styled.img`
	align-self: end;
	width: 128px;
	margin: 0 auto;
`

const SectionTitileGroup = styled.div`
	display: grid;
	grid-template-columns: 300px auto;
	margin: 0 40px;
	grid-gap: 20px;
	grid-template-rows: auto 100%;

	@media (max-width: 720px) {
		grid-template-columns: 1fr;
	}
`

const SectionTitle = styled.h3`
	color: #fff;
	font-size: 60px;
	margin: 0;
	line-height: 1.2;

	@media (max-width: 720px) {
		font-size: 40px;
	}
`

const SectionText = styled.p`
	color: #fff;
`
