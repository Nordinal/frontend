import { Route } from "react-router-dom";
import IndexPage from './components/indexPage/IndexPage'


function App() {
  return (
    <div className="App">
      <Route exact path='/' render={() => <IndexPage />} />
      {/* <Route path='/auth' render={} /> */}
    </div>
  );
}

export default App;
