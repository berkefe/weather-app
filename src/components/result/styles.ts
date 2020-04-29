import styled from "styled-components";
import ResultFadeIn from "../../animations/resultFadeIn";
import device from "../../device";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 40px 0;
  opacity: 0;
  visibility: hidden;
  position: relative;
  top: 20px;
  animation: ${ResultFadeIn} 0.5s 1.4s forwards;
`;

export const Label = styled.h2`
  color: ${({ color }) => color || "#FFFFFF"};
  display: block;
  font-weight: ${({ weight }) => weight || "600"};
  font-size: ${({ fontSize }) => fontSize || "30px"};
  text-align: ${({ align }) => align || "left"};
  padding: 5px 0;
  ${({ firstToUpperCase }) =>
    firstToUpperCase &&
    `
  &:first-letter {
    text-transform: uppercase;
  }
  `}
  @media ${device.tablet} {
    font-size: ${({ fontSize }) => fontSize || "37px"};
  }
  @media ${device.laptop} {
    font-size: ${({ fontSize }) => fontSize || "43px"};
  } 
  @media ${device.laptopL} {
    font-size: ${({ fontSize }) => fontSize || "52px"};
  } 
`;

export const Small = styled.h4`
  color: ${({ color }) => color || "#FFFFFF"};
  display: block;
  font-weight: ${({ weight }) => weight || "600"};
  font-size: ${({ fontSize }) => fontSize || "15px"};
  text-align: ${({ align }) => align || "left"};
  padding: 5px 0;
  ${({ firstToUpperCase }) =>
    firstToUpperCase &&
    `
  &:first-letter {
    text-transform: uppercase;
  }
  `}
  @media ${device.tablet} {
    font-size: ${({ fontSize }) => fontSize || "20px"};
  }
  @media ${device.laptop} {
    font-size: ${({ fontSize }) => fontSize || "23px"};
  } 
  @media ${device.laptopL} {
    font-size: ${({ fontSize }) => fontSize || "26px"};
  }
`;

export const Header = styled.header`
  flex-basis: 100%;
`;
