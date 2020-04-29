import React from "react";
import { Container, Icon, Text } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFrown } from "@fortawesome/free-solid-svg-icons";

const NotFound: React.FC = () => (
  <Container>
    <Icon>
      <FontAwesomeIcon icon={faFrown} />
    </Icon>
    <Text>Sorry, the specified city was not found..</Text>
  </Container>
);

export default NotFound;
