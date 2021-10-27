import './App.css';
import BTGameOanTuTiRedux from './BTGameOanTuTiRedux/BTGameOanTuTiRedux';
import {Provider} from 'react-redux'
import {store} from  './redux/rootReducer'


function App() {
  return (
    <div className="App">
      <Provider store={store}>
          <BTGameOanTuTiRedux/>
      </Provider>
    </div>
  );
}

export default App;
