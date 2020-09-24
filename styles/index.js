import styled, { css } from "styled-components/native";

export const Main = styled.View`
  height: 100%;
  background-color: #94958b;
`;

export const Header = styled.View`
  margin-top: 25px;
  height: 30px;
  background-color: purple;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 5px;
`;

export const H1 = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: black;
  text-transform: uppercase;
  margin-left: 10px;
`;

export const GistsRow = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 50px;
`;

export const GistsImage = styled.Image`
  width: 40px;
  height: 40px;
  margin: 10px;
  border-radius: 5px;
  background-color: white;
`;

export const GistsFile = styled.Text`
  font-size: 15px;
  color: black;
  margin: 0 10px;
  max-width: 70%;
`;

export const Separator = styled.View`
  height: 1px;
  width: 100%;
  background-color: gray;
`;

export const ModalContainer = styled.Modal`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Mask = styled.View`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalInside = styled.View`
  z-index: 200;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ModalItem = styled.TouchableOpacity`
  padding: 10px;
  justify-content: center;
  align-items: center;
`;
