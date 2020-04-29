import styled from "styled-components";
import ResultFadeIn from "../../animations/resultFadeIn";

export const Container = styled.div`
  max-width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px auto 0;
  padding: 20px;
  opacity: 0;
  visibility: hidden;
  position: relative;
  border-radius: 10px;
  top: 20px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  animation: ${ResultFadeIn} 0.5s 1.4s forwards;
`;

export const Icon = styled.span`
  display: block;
  text-align: center;
  color: #ffffff;
  font-size: 40px;
  margin-right: 10px;
`;

export const Text = styled.span`
  color: #ffffff;
  font-size: 17px;
`;
