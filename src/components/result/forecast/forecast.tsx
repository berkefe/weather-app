import React from "react";
import { Container, Medium, ForecastDiv } from "./styles";
import ForecastHour from "./forecastHour";

interface Props {
  forecast: Forecast[];
}

interface Forecast {
  dt_txt: string;
  weather: Weather[];
  main: Main;
}

interface Main {
  temp: number;
}

interface Weather {
  icon: string;
}

const Forecast: React.FC<Props> = ({ forecast }) => (
  <Container>
    <Medium weight="400">Forecast</Medium>
    <ForecastDiv>
      {forecast.map(({ dt_txt, weather: [{ icon }], main: { temp } }) => (
        <ForecastHour key={dt_txt} date={dt_txt} icon={icon} temp={temp} />
      ))}
    </ForecastDiv>
  </Container>
);

export default Forecast;
