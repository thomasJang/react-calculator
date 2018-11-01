import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 5px;
  [data-display] {
    border-radius: 5px;
    border: 2px solid #000;
    height: 60px;
    line-height: 60px;
    box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.2);
    text-align: left;
    font-size: 18px;
    font-weight: bold;
    padding: 0 15px;
    color: #000;
  }
`;

class Display extends React.Component {
  render() {
    return (
      <Container>
        <div data-display>{this.props.displayValue}</div>
      </Container>
    );
  }
}

export default Display;
