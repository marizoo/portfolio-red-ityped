import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 768px) {
      ${props}
    }
  `;
};

export const mainColor = () => {
  return css`
  #15023a
  `;
};

export const secondaryColor = () => {
  return css`
  crimson
  `;
};
