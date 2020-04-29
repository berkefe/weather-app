import React, { useState, useEffect } from "react";
import { Container, WeatherIcon, Temperature } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faBolt,
  faCloudRain,
  faCloudShowersHeavy,
  faSnowflake,
  faSun,
  faSmog,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { Small } from "../styles";

interface Props {
  main: string;
  temp: number;
  description: string;
}

export const KToC = (k: number): number => k - 273.15;

const Summary: React.FC<Props> = ({ main, temp, description }) => {
  const [icon, setIcon] = useState<IconDefinition>();

  useEffect(() => {
    switch (main) {
      case "Thunderstorm":
        setIcon(faBolt);

        break;

      case "Drizzle":
        setIcon(faCloudRain);

        break;

      case "Rain":
        setIcon(faCloudShowersHeavy);

        break;

      case "Snow":
        setIcon(faSnowflake);

        break;

      case "Clear":
        setIcon(faSun);

        break;

      case "Clouds":
        setIcon(faCloud);

        break;

      default:
        setIcon(faSmog);

        break;
    }
  }, [icon, main]);

  return (
    <Container>
      <WeatherIcon>{icon && <FontAwesomeIcon icon={icon} />}</WeatherIcon>
      <div>
        <Temperature>{Math.floor(KToC(temp))}&#176;</Temperature>
        <Small weight="400" firstToUpperCase>
          {description}
        </Small>
      </div>
    </Container>
  );
};

export default Summary;
