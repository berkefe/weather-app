import React, { useEffect, useReducer } from "react";
import { ForecastWrapper, WeatherIcon } from "./styles";
import { Text } from "../details/styles";
import { Small } from "../styles";
import { KToC } from "../summary/summary";

interface Props {
  date: string;
  icon: string;
  temp: number;
}

type Action = {
  type: "+";
  month: string;
  day: string;
  hour: string;
};

interface StateI {
  month: string;
  day: string;
  hour: string;
}

type State = StateI;

const reducer = (state: State, action: Action): any => {
  const { type, month, day, hour } = action;

  switch (type) {
    case "+":
      return {
        month,
        day,
        hour,
      };

    default:
      return state;
  }
};

const ForecastHour: React.FC<Props> = ({ date, icon, temp }) => {
  const [{ month, day, hour }, dispatch] = useReducer(reducer, {});

  useEffect(() => {
    const month = date.split("-")[1];
    const day = date.split("-")[2].split(" ")[0];
    const hour = date
      .split("-")[2]
      .split(" ")[1]
      .split(":")
      .join(":")
      .slice(0, 5);

    dispatch({
      type: "+",
      month,
      day,
      hour,
    });
  }, [date]);

  return (
    <ForecastWrapper>
      <Text align="center">
        {month}.{day}
      </Text>
      <Text align="center">{hour}</Text>
      <WeatherIcon src={`https://openweathermap.org/img/w/${icon}.png`} />
      <Small align="center" weight="400">
        {Math.floor(KToC(temp))}&#176;
      </Small>
    </ForecastWrapper>
  );
};

export default ForecastHour;
