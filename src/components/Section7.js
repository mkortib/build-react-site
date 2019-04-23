import React from 'react'
import styled from 'styled-components'
import Wave from './Wave'

export default function Section7(props) {
	return (
		<SectionGroup sectBg={props.sectBg} aeImg={props.aeImg}>
			<AESection>
			<WaveTop>
				<Wave />
			</WaveTop>
			<AETitle>{props.title}</AETitle>
			<AECnt>
				<Paragr>{props.paragr}</Paragr>
				<CellGroup>
					{
						props.arrAr.map((cell, index) => {
							return <CellItm>
												<CellImg srcprop={require(`../images/ae${index + 1}.svg`)}></CellImg>
												<CellParagr>{cell.title}</CellParagr>
											</CellItm>
						})
					}
				</CellGroup>
			</AECnt>
			<WaveBottom>
				<Wave />
			</WaveBottom>
		</AESection>
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
	background: url(${props => props.sectBg});
	height: 1152px;
	background-size: cover;
	display: grid;
	align-items: center;
	grid-gap: 20px;
	position: relative;
	margin: 0px 0 0;

	&::after {
		content: '';
		width: 130px;
		height: 130px;
		background-image: url(${props => props.aeImg});
		background-size: cover;
		background-position: center;
		position: absolute;
		top: 160px;
		left: 50%;
		transform: translateX(-50%);
	}

	@media (max-width: 640px) {
		height: 820px;
	}
`


const AESection = styled.div`
	display: grid;
	grid-template-columns: 360px auto;
	grid-column-gap: 50px;
	max-width: 850px;
	margin: 150px auto 0;
`
const AETitle = styled.h2`
	background: linear-gradient(to right, #fff 0%, #549DFF 100%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	font-size: 60px;
	font-weight: 700;
	margin: 0;
	line-height: 1.3;
`
const AECnt = styled.div`

`
const Paragr = styled.p`
	color: rgba(255, 255, 255, .7);
	font-size: 20px;
`
const Span = styled.span`
	font-size: 18px;
	color: rgba(255, 255, 255, .7);
	text-transform: uppercase;
	font-weight: 600;
	margin-bottom: 10px;
`
const CellGroup = styled.div`

`
const CellItm = styled.div`
	display: grid;
	grid-template-columns: 60px auto;
	grid-gap: 25px;
	align-items: center;
`
const CellImg = styled.div`
	width: 60px;
	height: 60px;
	border-radius: 10px;
	position: relative;
	top: 0;
	transition: top .5s ease;
	
	&:hover {
		top: -5px;
		box-shadow: 0 5px 10px rgba(255,255,255,.3);
		cursor: pointer;
	}

	&.ar-bg1 {
		background: linear-gradient(to bottom right, #3672F8 0%, #9B51E0 100%)
	}

	&.ar-bg4 {
		background: linear-gradient(to bottom right, #3672F8 0%, #9B51E0 100%)
	}

	&.ar-bg5 {
		background: linear-gradient(to bottom right, #1DB3B3 0%, #9B51E0 100%)
	}

	&.ar-bg3 {
		background: linear-gradient(to bottom right, #223868 0%, #9B51E0 100%)
	}

	&.ar-bg2 {
		background: linear-gradient(to bottom right, #3672F8 0%, #4F0892 100%)
	}

	&::after {
		z-index: 5;
		position: absolute;
		width: 100%;
		height: 100%;
		content: '';
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background-image: url(${props => props.srcprop});
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	}

`
const CellParagr = styled.div`
	font-size: 24px;
	border-bottom: 1px solid rgba(0, 0, 0, .1);
	padding: 30px 0;
	transition: color .3s ease;
	color: rgba(255, 255, 255, .7);

	&:hover {
		cursor: pointer;
		color: #9B51E0;
	}
`
