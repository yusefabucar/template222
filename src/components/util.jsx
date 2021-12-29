import styled, { css } from "styled-components"

export const Paragraph = css`
  font-size: 1em;
  letter-spacing: 1.6px;
  ${(props) => (props.font ? "font-weight: 900;" : "font-weight: 400;")};
`;

export const About = styled.p`
  ${ Paragraph };
  background-color: red;
`