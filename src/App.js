import Hooks from "./Hooks";
import New1 from "./New1";

import { BrowserRouter as Router,Routes,Route, Link } from "react-router-dom";
function App (){
  return(

    <>
    <Router>
      <Link to="/New1">class..</Link> ||
      <Link to="/Hooks">Hooks..</Link>
      <Routes>
        <Route path="/New1" element={<New1/>}/>
        <Route path="/Hooks" element={<Hooks/>}/>
      </Routes>
    </Router>

    
    </>
  )
}
export default App;