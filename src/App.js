import { Link, Route, Routes } from "react-router-dom";
import Create from "./components/Create";
import Header from "./components/Header";
import User from "./components/User";
import Post from "./Post";

function App() {
  return (
    <>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Header</Link>
          </li>
          <li>
            <Link to="/post">Listing all resource</Link>
          </li>
          <li>
            <Link to="/create">Creating a resource</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </>
  );
}
/*
Make an UI for the following with proper routes following these APIs.

Listing all resources ( 'https://jsonplaceholder.typicode.com/posts?_start=0&_limit=5' )  with pagination.

Creating a resource ( 'https://jsonplaceholder.typicode.com/posts' ) ( 'POST' )

Updating a resource ( 'https://jsonplaceholder.typicode.com/posts/{postId}' )

Deleting a resource ( 'https://jsonplaceholder.typicode.com/posts/1' ))

NB : make sure to commit the code at each stage and use the redux to manage the API.*/
export default App;
