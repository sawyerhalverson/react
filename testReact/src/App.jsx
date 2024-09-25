import Body from "./Body";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={isDarkMode ? "dark-mode" : ""}>
      <Header toggleDarkMode={toggleDarkMode} />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
