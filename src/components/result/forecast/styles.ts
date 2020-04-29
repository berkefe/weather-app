import styled from "styled-components";
import device from "../../../device";

export const Container = styled.div`
  flex-basis: 100%;
  margin: 20px 0;
  overflow: hidden;
`;

export const Medium = styled.h3`
    color: ${({ color }) => color || "#FFFFFF"};
  display: block;
  font-weight: ${({ weight }) => weight || "600"};
  font-size: ${({ fontSize }) => fontSize || "20px"};
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
    font-size: ${({ fontSize }) => fontSize || "23px"};
  }
  @media ${device.laptop} {
    font-size: ${({ fontSize }) => fontSize || "26px"};
  } 
  @media ${device.laptopL} {
    font-size: ${({ fontSize }) => fontSize || "29px"};
  }
`;

export const ForecastDiv = styled.div`
  position: relative;
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  scrollbar-color: lightgray #ffffff;
  scrollbar-width: thin;

  margin-top: 20px;
  padding-bottom: 20px;
  @media ${device.laptop} {
    order: 4;
  }
`;

export const ForecastWrapper = styled.div`
  flex-shrink: 0;
  flex-basis: 90px;
  padding: 10px;
  margin: 0 5px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.2);
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
  @media ${device.tablet} {
    flex-basis: 110px;
  }
  @media ${device.laptop} {
    flex-basis: 125px;
  }
  @media ${device.laptopL} {
    flex-basis: 140px;
  }
`;

export const WeatherIcon = styled.img`
  display: block;
  height: 50px;
  width: 50px;
  margin: 0 auto;
`;
