import { theme } from "../../styles/theme";
import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";
import { GlobalStyle } from "../../styles/GlobalStyles";

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
  border-radius: 24px;
  padding: 40px;
  width: 100%;
  max-width: 300px;
  box-shadow: ${theme.shadows.card};
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
export default function MainLayout() {
  return (
    <>
      <GlobalStyle />
      <LayoutContainer>
        <Card>
          <Outlet />
        </Card>
      </LayoutContainer>
    </>
  );
}
