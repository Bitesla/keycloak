import { useAuth } from 'react-oidc-context';
import './App.css';

function App() {
  const auth = useAuth();

  return (
    <div>
      {!auth.isAuthenticated ? (
            <button  onClick={() => auth.signinPopup()}>login</button>
      ) : 
      <button onClick={() => auth.signoutRedirect()}>logout</button>
    }
    {auth.user?.profile.email}
    </div>
  )
}

export default App
