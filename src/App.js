import './App.css'
import { Provider } from 'react-redux'
import store from './redux/store'
import Subscribers from './components/Subscribers'
import Display from './components/Display'
import Views from './components/Views'

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <Subscribers />
        <Views />
        <Display />
      </div>
    </Provider>
  );
}

export default App;
