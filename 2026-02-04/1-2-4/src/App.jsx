import Edite from "./components/Edite";
import Theme from "./components/Theme";
import { useState } from "react";

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => setIsDark((prev) => !prev);
  const themeStyle = {
    background: isDark
      ? "linear-gradient(180deg, #0a0a0b 0%, #161618 100%)"
      : "linear-gradient(180deg, #ffffff 0%, #d8d8ff 100%)",
    color: isDark ? "#fff" : "rgb(48, 41, 63)",
  };
  return (
    <>
      <Theme isDark={isDark} style={themeStyle}>
        <Edite isDark={isDark} toggleTheme={toggleTheme} />
      </Theme>
    </>
  );
}
