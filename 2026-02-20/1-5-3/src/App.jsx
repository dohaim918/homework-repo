import Counter from "./components/Counter";
import MainLayout from "./components/layout/MainLayout";
import { GlobalStyle } from "./styles/GlobalStyles";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <MainLayout>
        <Counter />
      </MainLayout>
    </>
  );
}
