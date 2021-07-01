import { Provider } from 'react-redux';
import { store } from '../redux';
import PackagesList from './PackagesList';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <PackagesList />
      </div>
    </Provider>
  );
};

export default App;
