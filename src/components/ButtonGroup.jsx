import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
  :after {
    content: "";
    display: block;
    clear: both;
  }
`;

class ButtonGroup extends React.Component {
  handleClick = e => {
    this.props.onClickButton(e.target.innerText);
  };
  render() {
    return (
      <Container onClick={this.handleClick}>{this.props.children}</Container>
    );
  }
}

export default ButtonGroup;
