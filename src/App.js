import { useEffect, useState } from "react";
import User from "./components/User";

function App() {
  const [resource, setResource] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/posts?_start=0&_limit=5")
      .then((res) => res.json())
      .then((data) => {
        setResource(data);
      });
    console.log(resource);
  };

  const createResource = async (title, body) => {
    await fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        if (res.status == !200) {
          return;
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setResource((item) => [...item, data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      {resource.map((list) => (
        <User key={list.id} id={list.id} title={list.title} body={list.body} />
      ))}
    </div>
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
