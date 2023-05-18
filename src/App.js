import './App.css';
import Routes from './routes/Routes';
import { AuthProvider } from './features/auth/AuthContext';


function App() {
  return (
      <AuthProvider>
        <Routes />
      </AuthProvider>
  );
}

export default App;
