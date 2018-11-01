import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
  float: left;
  width: ${p => (p.size / 4) * 100}%;
  padding: 5px;
  button {
    :focus {
      outline: none;
    }
    :hover {
      background: #eee;
    }
    :active {
      box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.4);
    }
    color: #000;
    font-size: 20px;
    line-height: 40px;
    font-weight: bold;
    cursor: pointer;
    width: 100%;
    background: transparent;
    border-radius: 5px;
    border: 2px solid #000;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);

    &[data-color="gray"] {
      background: #eee;
      :hover {
        background: #ccc;
      }
    }
  }
`;

class Button extends React.Component {
  render() {
    const { size = 1, color, children } = this.props;
    return (
      <Container size={size}>
        <button data-color={color}>{children}</button>
      </Container>
    );
  }
}

export default Button;
