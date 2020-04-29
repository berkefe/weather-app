import React from "react";
import { KToC } from "../summary/summary";
import { Container } from "./styles";
import WeatherDetail from "./weatherDetail";

interface Props {
  tempM: number;
  wind: number;
  sunrise: string;
  tempS: number;
  humidity: number;
  sunset: string;
}

const Details: React.FC<Props> = ({
  tempM,
  wind,
  sunrise,
  tempS,
  humidity,
  sunset,
}) => (
  <Container>
    <WeatherDetail label={Math.floor(KToC(tempM))} text="Hight">
      &#176;
    </WeatherDetail>
    <WeatherDetail label={wind} text="Wind">
      mph
    </WeatherDetail>
    <WeatherDetail label={sunrise} text="Sunrise" />
    <WeatherDetail label={Math.floor(KToC(tempS))} text="Low">
      &#176;
    </WeatherDetail>
    <WeatherDetail label={humidity} text="Rain">
      %
    </WeatherDetail>
    <WeatherDetail label={sunset} text="Sunset" />
  </Container>
);

export default Details;
