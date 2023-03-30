import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/new">New Post</Link>
          </li>
          <li>
            <Link to="/posts">All Posts</Link>
          </li>
          <li>
            <Link to="/tags">Tags</Link>
          </li>
          {/* <li>
            <Link to="/register">Register</Link>
          </li> */}
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

// function Navbar({ user, setUser }) {
  
//   const logout = () => {
//     localStorage.removeItem("token")
//     setUser({})
//   };

//   return (
//     <ul className="user-auth">
//       {user ? 
//         <>
//           <li style={{ color: "black" }}>Welcome {user}!</li>
//           <li className="posts-nav">
//             <Link to="/posts">Posts</Link>
//           </li>
//           <li onClick={logout}>
//             <Link to="/login">Logout</Link>
//           </li>
//         </>
//        : 
//         <>
//           <li className="posts-nav">
//             <Link to="/posts">Posts</Link>
//           </li>
//           <li>
//             <Link to="/login">Login</Link>
//           </li>
//           <li>
//             <Link to="/register">Register</Link>
//           </li>
//         </>
//       }
//     </ul>
//   );
// }

export default Navbar;