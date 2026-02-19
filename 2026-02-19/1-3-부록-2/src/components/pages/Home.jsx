import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { theme } from "../../styles/theme";
const HomeIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    stroke={theme.colors.indigo}
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
);

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: ${theme.spacing.lg};
  width: 100%;
  padding: 20px 0;

  h2 {
    font-size: 2rem;
    color: ${theme.colors.textPrimary};
    margin-bottom: ${theme.spacing.xs};
    text-shadow: ${theme.shadows.indigo};
  }

  .nav-btn {
    padding: ${theme.spacing.sm} ${theme.spacing.lg};
    background: ${theme.colors.indigo};
    color: white;
    border: none;
    border-radius: ${theme.borderRadius.md};
    font-size: 1rem;
    font-weight: 600;

    transition: all 0.2s ease;
    text-decoration: none;
    display: inline-block;

    &:hover {
      background: ${theme.colors.indigoLight};
      box-shadow: ${theme.shadows.signature};
      transform: translateY(-2px);
    }

    &:active {
      transform: scale(0.95);
    }
  }
`;
export default function Home() {
  return (
    <HomeContainer>
      <HomeIcon />
      <h2>미니 블로그홈</h2>

      <Link to="/posts" className="nav-btn">
        <button>글 목록 보러가기</button>
      </Link>
    </HomeContainer>
  );
}
