

import {
  Routes as Routers,
  Route,
  Navigate,
} from "react-router-dom";
import Results from "./Results";


const Routes = () => {
  return (
    <div className="p-4">
      <Routers>
        <Route path="/" element={<Navigate to="/search" />}/>
        <Route path="/search" element={<Results />}/>
        <Route path="/videos" element={<Results />}/>
        <Route path="/image" element={<Results />}/>
        <Route path="/news" element={<Results />}/>
      </Routers>
    </div>
  )
}

export default Routes