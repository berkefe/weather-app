import React from "react";
import { Container, Label, Small, Header } from "./styles";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import Summary from "./summary/summary";
import Details from "./details/details";
import NotFound from "../notfound/notFound";
import Forecast from "./forecast/forecast";

interface Props {
  city: string;
}

interface Data {
  weather: Weather;
}

interface Weather {
  name: string;
  sys: Sys;
  weather: WeatherDetail[];
  main: Main;
  wind: Wind;
}

interface Wind {
  speed: number;
}

interface Sys {
  country: string;
  sunrise: number;
  sunset: number;
}

interface WeatherDetail {
  main: string;
  description: string;
}

interface Main {
  temp: number;
  temp_max: number;
  temp_min: number;
  humidity: number;
}

export interface DataF {
  forecast: ForecastF[];
}

interface ForecastF {
  dt_txt: string;
  weather: WeatherF[];
  main: MainF;
}

interface MainF {
  temp: number;
}

interface WeatherF {
  icon: string;
}

const Result: React.FC<Props> = ({ city }) => {
  const weather = gql`
    query Weather($city: String!) {
      weather(city: $city) {
        name
        sys {
          country
          sunrise
          sunset
        }
        weather {
          main
          description
        }
        main {
          temp
          temp_max
          temp_min
          humidity
        }
        wind {
          speed
        }
      }
    }
  `;
  const forecastQ = gql`
    query Forecast($city: String!) {
      forecast(city: $city) {
        dt_txt
        weather {
          icon
        }
        main {
          temp
        }
      }
    }
  `;

  // renaming
  const { loading: wl, data: wd, error: we } = useQuery(weather, {
    variables: { city },
  });
  const { loading: fl, data: fd } = useQuery(forecastQ, {
    variables: { city },
  });

  if (we) return <NotFound />;
  else if (wl) return <></>;

  if (fl) return <></>;

  const {
    weather: {
      name,
      sys: { country, sunrise, sunset },
      weather: [{ main, description }],
      main: { temp, temp_max, temp_min, humidity },
      wind: { speed },
    },
  }: Data = wd;

  const { forecast }: DataF = fd;

  const date = (): string => {
    const currentDate = new Date();
    const day = currentDate.getDay();
    const date = currentDate.getDate();
    const month = currentDate.getMonth();

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "Nocvember",
      "December",
    ];
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    return `${days[day]} ${date} ${months[month]}`;
  };

  const unixToDate = (unix: number) =>
    new Date(unix * 1000).toLocaleTimeString().slice(0, 5);

  return (
    <Container>
      <Header>
        <Label>
          {name}, {country}
        </Label>
        <Small weight="400">{date()}</Small>
      </Header>
      <Summary main={main} temp={temp} description={description} />
      <Details
        tempM={temp_max}
        wind={speed}
        sunrise={unixToDate(sunrise)}
        tempS={temp_min}
        humidity={humidity}
        sunset={unixToDate(sunset)}
      />
      <Forecast forecast={forecast} />
    </Container>
  );
};

export default Result;
