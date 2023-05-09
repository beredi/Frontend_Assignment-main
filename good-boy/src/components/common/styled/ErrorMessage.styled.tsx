import styled from "styled-components";
import { ErrorMessage } from "formik";

export const ErrorMessageStyled = styled(ErrorMessage)`
  color: #ff0000;
  margin-top: 10px;
  animation-name: zoomIn;
  animation-duration: 0.1s;
`;
