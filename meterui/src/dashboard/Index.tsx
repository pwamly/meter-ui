import { Link,Outlet } from "react-router-dom";
import User from './user/user'

function Index() {
  return (
    <div>
        <Link to='user'>Aser</Link>
        <Link to='admin'>Admin</Link>
        <Outlet/>
    
 </div>
  );
}

export default Index;
