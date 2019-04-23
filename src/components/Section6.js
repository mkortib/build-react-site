import React from 'react'
import styled from 'styled-components'

export default function Section6(props) {
	return (
		<ARKitSection>
			<ARKitTitle>{props.title}</ARKitTitle>
			<ARKitCnt>
				<Paragr>{props.paragr}</Paragr>
				<Span>{props.spantxt}</Span>
				<CellGroup>
					{
						props.arrAr.map(cell => {
							return <CellItm>
												<CellImg srcprop={props.arImg} className={cell.class}></CellImg>
												<CellParagr>{cell.title}</CellParagr>
											</CellItm>
						})
					}
				</CellGroup>
			</ARKitCnt>
		</ARKitSection>
	)
}

const ARKitSection = styled.div`
	display: grid;
	grid-template-columns: 340px auto;
	grid-column-gap: 50px;
	max-width: 850px;
	margin: 100px auto;
`
const ARKitTitle = styled.h2`
	background: linear-gradient(to right, #8C00BC 0%, #2E29F3 100%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	font-size: 80px;
	font-weight: 700;
	margin: 0;
	line-height: 1.3;
`
const ARKitCnt = styled.div`

`
const Paragr = styled.p`
	color: #205284;
	font-size: 20px;
`
const Span = styled.span`
	font-size: 18px;
	color: #B9C8DD;
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
		box-shadow: 0 5px 10px rgba(0,0,0,.3);
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
		width: 30px;
		height: 30px;
		content: '';
		transform: translate(-50%, -50%);
		top: 50%;
		left: 50%;
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

	&:hover {
		cursor: pointer;
		color: #9B51E0;
	}
`
