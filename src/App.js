import {BrowserRouter as Router, Route,Routes} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Header from "./pages/Header";
import { AuthContextProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Account from "./pages/Account";
import ProtectedRout from "./components/protectRouter/ProtectedRout";



function App() {
  return (
 <> 

<Router>
   <AuthContextProvider>
<Navbar />
<Routes>
  <Route path="/" element={<Header/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/signup" element={<Signup/>}/>
  <Route path="/account" element={<ProtectedRout><Account/></ProtectedRout> }/>
</Routes>
</AuthContextProvider>
</Router>


 </>
  );
}

export default App;
