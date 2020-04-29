import React, { useState } from "react";
import { Title, Main } from "./styles";
import Search from "../search/search";
import Result from "../result/result";

const AppComponent: React.FC = () => {
  const [city, setCity] = useState("");

  return (
    <>
      <Title showLabel={city}>weather app</Title>
      <Main>
        <Title secondary showResult={city}>
          weather app
        </Title>
        <Search city={city} setCity={setCity} />
        {city && <Result city={city} />}
      </Main>
    </>
  );
};

export default AppComponent;
