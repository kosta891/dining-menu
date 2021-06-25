import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { MealsContextProvider } from './store/meals-context';
import './index.css';
import App from './App';

ReactDOM.render(
  <MealsContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MealsContextProvider>,
  document.getElementById('root')
);
