import Langege from "./components/Langege";
import MainLayout from "./components/layout/MainLayout";
import { LanguageProvider } from "./contexts/LanguageContext";
import { GlobalStyle } from "./styles/GlobalStyles";

export default function App() {
  return (
    <LanguageProvider>
      <GlobalStyle />
      <MainLayout>
        <Langege />
      </MainLayout>
    </LanguageProvider>
  );
}
