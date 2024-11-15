import Admin from "./pages/Admin";
import Users from "./pages/Users";

function App() {
    return <>{true ? <Admin /> : <Users />}</>;
}

export default App;
