import React from 'react'
import styled from 'styled-components'
import Wave from './Wave'

export default function Section3(props) {
	return (
		<SectionGroup image={props.image}>
			<WaveTop>
				<Wave />
			</WaveTop>
			<SectionTitileGroup>
				<SectionTitle>{props.title}</SectionTitle>
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
	height: 590px;
	background-size: cover;
	display: grid;
	${'' /* grid-template-rows: 300px auto; */}
	grid-gap: 20px;
	position: relative;

	@media (max-width: 640px) {
		height: 820px;
	}
`

const SectionTitileGroup = styled.div`
	display: grid;
	${'' /* grid-template-columns: 1fr; */}
	margin: 0 40px;
	justify-items: center;
	align-items: center;
	grid-gap: 20px;

	@media (max-width: 720px) {
		grid-template-columns: 1fr;
	}
`

const SectionTitle = styled.h3`
	max-width: 730px;
	background: linear-gradient(to right, #F5A124 0%, #D82B63 100%);
	font-size: 60px;
	margin: 0;
	line-height: 1.4;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;

	@media (max-width: 720px) {
		font-size: 40px;
	}
`