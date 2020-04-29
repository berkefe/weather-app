import React, { ReactNode } from "react";
import { WeatherDetail as WD, Text } from "./styles";
import { Small } from "../styles";

interface Props {
  label: number | string;
  text: string;
  children?: ReactNode;
}

const WeatherDetail: React.FC<Props> = ({ label, text, children }) => {
  return (
    <WD>
      <Small align="center" weight="400">
        {label}
        {children}
      </Small>
      <Text align="center">{text}</Text>
    </WD>
  );
};

export default WeatherDetail;
