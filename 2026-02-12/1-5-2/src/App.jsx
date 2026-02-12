import TodoList from "./components/TodoList";

import MainLayout from "./components/layout/MainLayout";
import { GlobalStyle } from "./styles/GlobalStyles";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <MainLayout>
        <TodoList />
      </MainLayout>
    </>
  );
}
