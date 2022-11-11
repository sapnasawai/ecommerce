import "./App.css";
import { PageRoutes } from "./Routes/PageRoutes";
import { Toaster } from "react-hot-toast"

function App() {
  return (
    <div className="App">
      <PageRoutes/>
      <Toaster toastOptions={{
    className: '',
    style: {
      color: 'white',
      backgroundColor : "#343a40",
      fontSize : "2.5rem"
    },
  }}/>
    </div>
  );
}

export default App;
