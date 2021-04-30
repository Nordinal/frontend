import { Route } from "react-router-dom";
import AuthPageContainer from "./components/authPage/AuthPageContainer";
import IndexPage from './components/indexPage/IndexPage'


function App() {
  return (
    <div className="App">
      <Route exact path='/' render={() => <IndexPage />} />
      <Route path='/auth' render={() => <AuthPageContainer />} />
    </div>
  );
}

export default App;
