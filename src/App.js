import { useRoutes } from 'react-router-dom';
import './App.scss';
import { routes } from './routes';


function App() {
  const elements = useRoutes(routes);
  return (
    <>
      {elements}
    </>
  );
}

export default App;
