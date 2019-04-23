import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from 'react'
import logo from '../images/logo-designcode.svg'
import './Header.css'
import StripeCheckout from 'react-stripe-checkout'

export default class header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 50) {
      this.setState({ hasScrolled: true });
    } else {
      this.setState({ hasScrolled: false });
    }
  }

  // handlePurchase = (token) => {
  //   const amount = 5000;
  //   const description = "My awesome product";

  //   const bodyObject = {
  //     tokenId: token.id,
  //     email: token.email,
  //     name: token.name,
  //     description,
  //     amount
  //   }

  //   fetch('http://localhost:9000/stripe-charge', {
  //     method: 'POST',
  //     body: JSON.stringify(bodyObject)
  //   })
  // }

  render() {
    return (
      <header className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
        <div className="HeaderGroup">
          <Link to="/"><img src={logo} width="30" /></Link>
          <Link to="/courses">Courses</Link>
          <Link to="/dowlands">Dowlands</Link>
          <Link to="/workshops">Workshops</Link>
          {/* <StripeCheckout amount={5000} image={logo} token={this.handlePurchase} stripeKey={'pk_test_XzCqotCoXwmXdYDpKaQV9YTH00HedmDGA9'}> */}

            <button>Buy</button>
          
          {/* </StripeCheckout> */}
        </div>
      </header>
    )
  }
}


// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

// export default Header
