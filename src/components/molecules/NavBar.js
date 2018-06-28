import React from 'react';
import {
  Navbar,
  NavbarBrand } from 'reactstrap';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Rokoloca</NavbarBrand>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
