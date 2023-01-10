// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import Upload from './components/Upload';
import { Provider } from 'react-redux'
import store from './store'
import Show from './components/Show';

export function App() {

  return (
    <Provider store={store}>
      <Upload />
      <Show />
    </Provider>
  );
}

export default App;
