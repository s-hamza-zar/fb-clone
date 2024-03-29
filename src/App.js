import "./App.css";
import Feed from "./Feed/Feed";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Widgets from "./Widgets/Widgets";
import Login from "./Login/Login";
import firebase from './firebase'
import { useStateValue } from "./StateProvider";
function App() {
  const [{user},dispatch]=useStateValue()

  let login = <Login />;
  let app = (
    <>
      <div className="app">
        <Header />
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      </div>
    </>
  );

  return <>{!user ? login : app}</>;
}

export default App;
