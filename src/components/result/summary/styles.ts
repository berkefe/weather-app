import styled from "styled-components";
import device from "../../../device";

export const Container = styled.div`
  flex-basis: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: auto 1fr;
  margin: 20px 0;
  grid-gap: 30px;
  @media ${device.mobileL} {
    flex-basis: 50%;
    padding-right: 10px;
  }
  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
    padding-right: 20px;
  }
`;

export const WeatherIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 70px;
  color: #ffffff;
  @media ${device.tablet} {
    font-size: 100px;
    justify-content: flex-end;
  }
  @media ${device.laptop} {
    font-size: 120px;
  }
  @media ${device.laptopL} {
    font-size: 140px;
  }
`;

export const Temperature = styled.h3`
  display: block;
  font-size: 50px;
  font-weight: 400;
  color: #ffffff;
  @media ${device.tablet} {
    font-size: 70px;
  }
  @media ${device.laptop} {
    font-size: 90px;
  }
  @media ${device.laptopL} {
    font-size: 110px;
  }
`;
