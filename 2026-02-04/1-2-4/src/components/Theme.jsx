export default function Theme({ children, isDark, style }) {
  return (
    <div className="container" style={style}>
      <div className={`${isDark ? "dark" : "light"}`}>{children}</div>
    </div>
  );
}
