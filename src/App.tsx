import TheHeader from "./components/common/TheHeader.tsx";
import {useTheme} from "./context/Theme.tsx";

function App() {
    const {theme} = useTheme();

  return (
    <div className={`app ${theme}`}>
      <TheHeader />
    </div>
  )
}

export default App
