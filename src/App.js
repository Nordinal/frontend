import { useEffect } from "react";
import { Route } from "react-router-dom";
import AuthPageContainer from "./components/authPage/AuthPageContainer";
import IndexPage from './components/indexPage/IndexPage'
import anchors from "./components/scripts/anchors";
import init from "./components/scripts/init";


function App() {
  useEffect(() => {
    anchors();
    init();
  }, [])
  return (
    <div className="App">
      <Route exact path='/' render={() => <IndexPage />} />
      <Route path='/auth' render={() => <AuthPageContainer />} />
    </div>
  );
}

export default App;
