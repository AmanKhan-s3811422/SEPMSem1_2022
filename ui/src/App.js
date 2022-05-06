import './App.css';
import Pages from './components/routing/Pages';
import {CookiesProvider} from "react-cookie";

function App() {
  return (
      <CookiesProvider>
          <div className="App">
              <Pages/>
          </div>
      </CookiesProvider>
  );
}

export default App;
