import logo from './logo.svg';
import './App.css';
import Routes from './routes/Routes';
import { AuthProvider } from './features/auth/AuthContext';
import Navbar from './components/Navbar';


function App() {
  return (
      <AuthProvider>
        <Routes />
      </AuthProvider>
  );
}

export default App;
