import React, { Dispatch, SetStateAction, useState } from "react";
import { Form, Input, Icon } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

interface Props {
  city: string;
  setCity: Dispatch<SetStateAction<string>>;
}

const Search: React.FC<Props> = ({ city, setCity }) => {
  const [input, setInput] = useState("");

  return (
    <Form
      onSubmit={e => {
        e.preventDefault();

        setCity(input);
      }}
      showResult={city}
    >
      <Input
        type="text"
        placeholder="Enter city"
        value={input}
        onChange={({ target: { value } }) => setInput(value)}
      />
      <Icon>
        <FontAwesomeIcon icon={faSearch} />
      </Icon>
    </Form>
  );
};

export default Search;
