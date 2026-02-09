import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { theme } from "../styles/theme";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.lg};

  h2 {
    font-size: 3.5rem;
    font-weight: 700;

    /* 숫자 흔들림 방지용 CSS */
    font-variant-numeric: tabular-nums;
    transition: all 0.3s ease;

    &.running {
      color: #fffff4;
      text-shadow: 0 0 15px rgba(167, 139, 250, 0.3);
      opacity: 1;
      text-shadow: ${theme.shadows.indigo};
      transform: scale(1);
    }

    &.stopped {
      color: ${theme.colors.textSecondary};
      text-shadow: none;
      transform: scale(0.9);
      opacity: 0.6;
    }
  }

  .reset {
    width: 100%;
    padding: ${theme.spacing.sm};
    background: transparent;
    border: 1px solid ${theme.colors.glassBorder};
    color: ${theme.colors.textSecondary};
    border-radius: ${theme.borderRadius.md};
    font-size: 0.85rem;
    transition: all 0.2s ease;
    margin-bottom: ${theme.spacing.sm};

    &:hover {
      background: ${theme.colors.glassBg};
      color: ${theme.colors.textPrimary};
      transform: scale(1.04);
    }

    &:active {
      transform: scale(0.95);
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  width: 100%;

  button {
    flex: 1;
    padding: ${theme.spacing.md};
    border-radius: ${theme.borderRadius.md};
    font-weight: 600;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
    &:active {
      transform: scale(0.91);
    }

    &.start {
      color: white;
      background: rgba(34, 197, 94, 0.2);
      border: 1px solid rgba(34, 197, 94, 0.8);
      box-shadow: 0 0 10px rgba(34, 197, 94, 0.3);

      &:hover {
        background: rgba(34, 197, 94);
        box-shadow: 0 4px 14px rgba(34, 197, 94, 0.3);
      }
    }

    &.stop {
      background: ${theme.colors.glassBg};
      border: 1px solid ${theme.colors.glassBorder};
      color: ${theme.colors.textSecondary};

      &:hover {
        background: rgba(255, 71, 71, 0.1);
        border-color: #ff4747;
        color: #ff4747;
      }
    }
  }
`;
export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const timeRef = useRef(null);

  // 스타일용
  const [isRunning, setIsRunning] = useState(false);

  // 시작
  const start = () => {
    if (timeRef.current) return;
    timeRef.current = setInterval(() => setTime((p) => p + 10), 10);

    setIsRunning(true);
  };
  // 멈춤
  const stop = () => {
    if (!timeRef.current) return;
    clearInterval(timeRef.current);
    timeRef.current = null;

    setIsRunning(false);
  };
  // 리셋
  const reset = () => {
    stop();
    setTime(0);
  };

  useEffect(() => {
    return () => stop();
  }, []);

  const timerFomet = () => {
    const ms = Math.floor((time % 1000) / 10);
    const totalSeconds = Math.floor(time / 1000);
    const seconds = totalSeconds % 60;
    const minutes = Math.floor(totalSeconds / 60);

    return {
      ms: String(ms).padStart(2, "0"),
      seconds: String(seconds).padStart(2, "0"),
      minutes: String(minutes).padStart(2, "0"),
    };
  };

  const { ms, seconds, minutes } = timerFomet();
  return (
    <Container>
      <h2 className={isRunning ? "running" : "stopped"}>{`${minutes} : ${seconds} : ${ms}`}</h2>
      <ButtonGroup>
        <button className="start" onClick={start}>
          Start
        </button>
        <button className="stop" onClick={stop}>
          Stop
        </button>
      </ButtonGroup>
      <button className="reset" onClick={reset}>
        Reset Timer
      </button>
    </Container>
  );
}
