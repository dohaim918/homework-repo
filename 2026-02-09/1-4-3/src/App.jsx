import MainLayout from "./components/layout/MainLayout";
import Stopwatch from "./components/Stopwatch";
import { GlobalStyle } from "./styles/GlobalStyles";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <MainLayout>
        <Stopwatch />
      </MainLayout>
    </>
  );
}
