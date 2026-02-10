import React from "react";
import styled from "@emotion/styled";
import { theme } from "../styles/theme";

const CardContainer = styled.div`
  padding: ${theme.spacing.lg};
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: ${theme.borderRadius.lg};
  background-color: ${theme.colors.surface};
  box-shadow: ${theme.shadows.card};
`;

export default function Stopwatch() {
  return <CardContainer>Stopwatch</CardContainer>;
}
