import styled from "styled-components";
import device from "../../../device";

export const Container = styled.div`
  flex-basis: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 10px 0;
  margin: 20px 0;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  align-self: flex-start;
  @media ${device.mobileL} {
    flex-basis: 50%;
  }
`;

export const WeatherDetail = styled.div`
  flex-basis: calc(100% / 3);
  padding: 10px;
  @media ${device.laptop} {
    padding: 20px 10px;
  }
`;

export const Text = styled.span`
  color: ${({ color }) => color || "#FFFFFF"};
  display: block;
  font-size: ${({ fontSize }) => fontSize || "12px"};
  text-align: ${({ align }) => align || "left"};
  ${({ firstToUpperCase }) =>
    firstToUpperCase &&
    `
  &:first-letter {
    text-transform: uppercase;
  }
  `}
  @media ${device.tablet} {
    font-size: ${({ fontSize }) => fontSize || "15px"};
  }
  @media ${device.laptop} {
    font-size: ${({ fontSize }) => fontSize || "17px"};
  } 
  @media ${device.laptopL} {
    font-size: ${({ fontSize }) => fontSize || "19px"};
  }
`;
