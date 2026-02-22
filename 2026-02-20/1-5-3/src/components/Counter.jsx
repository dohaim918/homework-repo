import styled from "@emotion/styled";
import { theme } from "../styles/theme";
import useCounterStore from "../stores/useCounterStore";

const MinusIcon = () => (
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
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

const PlusIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.lg};

  .count-display {
    text-align: center;

    h2 {
      font-size: 2rem;
      font-weight: 700;
      color: #e4e4ff;
      text-shadow: 0 0 14px rgba(228, 228, 255, 0.3);
      font-variant-numeric: tabular-nums;
    }
  }

  .reset {
    width: 100%;
    padding: ${theme.spacing.md};
    margin-top: ${theme.spacing.sm};

    background: ${theme.colors.glassBg};
    border: 1px solid ${theme.colors.glassBorder};
    color: ${theme.colors.textPrimary};
    border-radius: ${theme.borderRadius.md};

    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      background: rgba(71, 80, 255, 0.2);
      border-color: ${theme.colors.indigoLight};
      color: ${theme.colors.textPrimary};
      box-shadow: ${theme.shadows.indigo};
      transform: scale(1.05);
    }

    &:active {
      background: ${theme.colors.indigoLight};
      transform: scale(0.98);
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.lg};

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 54px;
    height: 54px;
    border-radius: 50%;
    background: ${theme.colors.glassBg};
    border: 1px solid ${theme.colors.glassBorder};
    color: ${theme.colors.textPrimary};
    cursor: pointer;
    transition: all 0.2s ease;
    svg {
      width: 24px;
      height: 24px;
    }

    &:hover {
      transform: scale(1.1);
    }

    &:active {
      transform: scale(0.95);
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      border-color: transparent;
    }
  }
  .decrement {
    &:hover {
      background: rgba(255, 71, 87, 0.15);
      border-color: #ff4757;
      color: #ff4757;
      box-shadow: 0 0 10px rgba(255, 71, 87, 0.4);
    }
  }

  .increment {
    &:hover {
      background: rgba(34, 197, 94, 0.2);
      border-color: rgba(34, 197, 94, 0.8);
      color: rgba(34, 197, 94, 0.8);
      box-shadow: 0 0 10px rgba(34, 197, 94, 0.3);
    }
  }
`;
export default function Counter() {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const reset = useCounterStore((state) => state.reset);
  return (
    <Container>
      <div className="count-display">
        <h2>Count : {count}</h2>
      </div>
      <ButtonGroup>
        <button className="decrement" onClick={decrement}>
          <MinusIcon />
        </button>
        <button className="increment" onClick={increment}>
          <PlusIcon />
        </button>
      </ButtonGroup>
      <button onClick={reset} className="reset">
        Reset
      </button>
    </Container>
  );
}
