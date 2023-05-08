import styled from "styled-components";

export const DropdownFlagContainer = styled.div`
  position: relative;
  width: 40px;
  text-align: center;
  display: flex;
  align-items: center;
  span {
    padding-left: 10px;
    color: #9f9f9f;
  }
`;

export const DropdownFlagHeader = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
  justify-content: center;
`;

export const DropdownFlagList = styled.ul`
  position: absolute;
  top: 20px;
  left: 0;
  width: 100%;
  margin: 0;
  padding: 0;
  max-height: 150px;
  overflow-y: auto;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  z-index: 1;
  text-align: center;
`;

export const DropdownFlagItem = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 5px;
  &:hover {
    background-color: #f2f2f2;
  }
`;

export const FlagImage = styled.img`
  width: 30px;
  height: 20px;
`;
