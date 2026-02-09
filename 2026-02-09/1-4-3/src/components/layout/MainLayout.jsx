import React, { Children } from "react";
import { theme } from "../../styles/theme";
import styled from "@emotion/styled";

const LayoutContainer = styled.div`
  padding: ${theme.spacing.lg};
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Card = styled.div`
  background: ${theme.colors.glassBg};
  backdrop-filter: blur(12px);
  border: 1px solid ${theme.colors.glassBorder};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.ls};
  width: 100%;
  max-width: 420px;
  box-shadow: ${theme.shadows.card};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: ${theme.spacing.lg};
`;
export default function MainLayout({ children }) {
  return (
    <LayoutContainer>
      <Card>{children}</Card>
    </LayoutContainer>
  );
}
