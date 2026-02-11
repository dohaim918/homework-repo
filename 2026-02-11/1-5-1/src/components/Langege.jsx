import styled from "@emotion/styled";
import { theme } from "../styles/theme";
import { useLang } from "../contexts/LanguageContext";

const GlobeIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 210px;

  h2 {
    font-size: 2rem;
    font-weight: 700;
    padding-bottom: ${theme.spacing.xs};
    color: ${theme.colors.textPrimary};
    margin-bottom: ${theme.spacing.xs};
    text-shadow: ${theme.shadows.indigo};
  }

  p {
    font-size: 1.1rem;
    color: ${theme.colors.textSecondary};
    margin-bottom: ${theme.spacing.lg};
  }

  .lang-btn {
    display: flex;
    align-items: center;
    gap: ${theme.spacing.sm};
    padding: ${theme.spacing.sm} ${theme.spacing.md};
    border-radius: ${theme.borderRadius.round};

    background: transparent;
    border: 1px solid ${theme.colors.indigo};
    color: ${theme.colors.indigo};
    font-weight: 600;
    font-size: 1rem;

    transition: all 0.3s ease;
    svg {
      width: 20px;
      height: 20px;
      transition: transform 0.4s ease;
    }
    .lang-badge {
      background: ${theme.colors.indigoLight};
      padding: 2px 8px;
      border-radius: 12px;
      font-size: 0.8rem;
      text-transform: uppercase;
      transition: all 0.2s ease;
    }

    &:hover {
      background: ${theme.colors.indigo};
      color: white;
      box-shadow: ${theme.shadows.signature};
      transform: translateY(-2px);
      svg:first-of-type {
        transform: rotate(-15deg);
      }
      svg:last-of-type {
        transform: rotate(15deg);
      }
      .lang-badge {
        background: rgba(255, 255, 255, 0.2);
      }
    }
    &:active {
      transform: translateY(1px) scale(0.95);
      background: ${theme.colors.indigo};
      color: white;
      box-shadow: ${theme.shadows.indigo};
    }
  }
`;

export default function Langege() {
  const { language, handleLanguage, trans } = useLang();
  return (
    <CardContainer>
      <h2>{trans("greeting")} </h2>
      <p>{trans("welcome")}</p>
      <button className="lang-btn" onClick={handleLanguage}>
        <GlobeIcon />
        <span className="lang-badge">
          {trans("changeLanguage")} {language}
        </span>{" "}
        <GlobeIcon />
      </button>
    </CardContainer>
  );
}
