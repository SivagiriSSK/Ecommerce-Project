import { HashRouter } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import AppRoutes from './routes/AppRoutes/AppRoutes';
import ErrorBoundary from './containers/shared/ErrorBoundary/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <HashRouter>
        <Header />
        <main>
          <AppRoutes />
        </main>
        <Footer />
      </HashRouter>
    </ErrorBoundary>
  );
}

export default App;
