import React from 'react'
import styled from 'styled-components'

export default function Section4(props) {
	return (
		<SectionImages>
			<div className="img-laptop">
				<img src={props.imgLaptop} alt="coding" />
			</div>
			<div className="img-iphone">
				<img src={props.imgIphone} alt="swift" />
			</div>
		</SectionImages>
	)
}

const SectionImages = styled.div`
	display: grid;
	max-width: 800px;
	margin: -160px auto -140px;
	grid-template-columns: 1fr;
	position: relative;
	z-index: 2;

	.img-laptop {
		width: 100%;

		img {
			position: relative;
			max-width: 100%;
			display: block;
			height: auto;
		}

	}

	.img-iphone {
		justify-self: end;
		max-width: 50%;

		img {
			position: relative;
			max-width: 100%;
			display: block;
			height: auto;
			margin-top: -260px;
		}

	}

`