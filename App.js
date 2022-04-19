import Login from "./components/Login";

function App() {
  return (
    <div className="app container">
      <div className="jumbotron">
        <p className="lead text-center">Inicie sesión en BuildO App</p>

        <Login 
          mensaje="Login.."
          
        
        />
      </div>
    </div>
  );
}

export default App;
