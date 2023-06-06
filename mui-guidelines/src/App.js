import { ThemeProvider } from "@mui/material";
import "./App.css";
import TodoApp from "./components/TodoApp";
import { darkTheme, lightTheme } from "./theme/theme";
import { useState } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <TodoApp toggleDarkMode={toggleDarkMode} />
    </ThemeProvider>
  );
}

export default App;
