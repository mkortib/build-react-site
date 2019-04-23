import React from 'react'
import styled from 'styled-components'

export default function Section2(props) {
	return (
		<SectionNumbers>
			<div className="hour-bl">
				<h2>{props.hoursTitle}</h2>
				<p>{props.hoursTxt}</p>
			</div>
			<div className="lang-bl">
				<h2>{props.langTitle}</h2>
				<p>{props.langTxt}</p>
			</div>
		</SectionNumbers>
	)
}

const SectionNumbers = styled.div`
	display: grid;
	max-width: 800px;
	margin: auto;
	grid-template-columns: repeat(2, 1fr);
	justify-items: center;
	align-items: center;
	grid-column-gap: 50px;
	text-align: center;

	h2 {
		font-size: 200px;
		margin: 0;
	}

	p {
		font-size: 30px;
		font-weight: 600;
		margin: 0;
	}

	.hour-bl {

		h2, p {
			background: linear-gradient(to left, #E84378 0%, #852F56 100%);
			-webkit-background-clip: text;
  		-webkit-text-fill-color: transparent;
		}

	}

	.lang-bl {

		h2, p {
			background: linear-gradient(to left, #FB826A 0%, #E3544E 100%);
			-webkit-background-clip: text;
  		-webkit-text-fill-color: transparent;
		}

	}
`