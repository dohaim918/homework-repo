import React from "react";
import useCounter from "./hooks/useCounter";
import styled from "@emotion/styled";
import { theme } from "../styles/theme";

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
  min-width: 160px;

  .count-display {
    text-align: center;

    h2 {
      font-size: 2rem;
      font-weight: 700;
      color: ${theme.colors.indigo};
      text-shadow: ${theme.shadows.indigo};
      font-variant-numeric: tabular-nums;
      margin-bottom: ${theme.spacing.md};
    }

    p {
      color: ${theme.colors.textSecondary};
      font-size: 1rem;
      font-weight: 500;
      letter-spacing: 0.5px;
    }
  }

  .reset {
    width: 100%;
    padding: ${theme.spacing.md};
    margin-top: ${theme.spacing.sm};

    background: ${theme.colors.glassBg};
    border: 1px solid ${theme.colors.glassBorder};
    color: ${theme.colors.textSecondary};
    border-radius: ${theme.borderRadius.md};

    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      background: ${theme.colors.indigoLight};
      border-color: ${theme.colors.indigo};
      color: ${theme.colors.textPrimary};
      box-shadow: ${theme.shadows.indigo};
    }

    &:active {
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
    width: 50px;
    height: 50px;
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

    &:hover:not(:disabled) {
      transform: scale(1.1);
    }

    &:active:not(:disabled) {
      transform: scale(0.95);
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      border-color: transparent;
    }
  }
  .decrement {
    &:hover:not(:disabled) {
      background: rgba(255, 71, 87, 0.15);
      border-color: #ff4757;
      color: #ff4757;
      box-shadow: 0 0 10px rgba(255, 71, 87, 0.4);
    }
  }

  .increment {
    &:hover:not(:disabled) {
      background: rgba(34, 197, 94, 0.2);
      border-color: rgba(34, 197, 94, 0.8);
      color: rgba(34, 197, 94, 0.8);
      box-shadow: 0 0 10px rgba(34, 197, 94, 0.3);
    }
  }
`;

export default function Counter() {
  const { count, min, max, increment, decrement, reset } = useCounter(5, { min: 0, max: 10 });
  return (
    <Container>
      <div className="count-display">
        <h2>Count : {count}</h2>
        <p>
          Limit : {min} ~ {max}
        </p>
      </div>
      <ButtonGroup>
        <button className="decrement" onClick={decrement} disabled={count === min}>
          <MinusIcon />
        </button>
        <button className="increment" onClick={increment} disabled={count === max}>
          <PlusIcon />
        </button>
      </ButtonGroup>
      <button onClick={reset} className="reset">
        Reset Counter
      </button>
    </Container>
  );
}
