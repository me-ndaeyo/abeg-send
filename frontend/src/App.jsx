import { createContext, useState } from 'react'
import Routes from './routes/Routes'
import './styles/App.scss'

export const themeContext = createContext(null)

export default function App() {
  const [light, setLight] = useState(true);

  const toggleTheme = () => {
    setLight((prevTheme) => !prevTheme);
  };
  return (
    <themeContext.Provider value={{light, toggleTheme}}>
      <div id={light ? 'light' : 'dark'}>
        <Routes />
      </div>
    </themeContext.Provider>
  );
}