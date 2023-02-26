import { useEffect, useState } from "react";
import User from "./components/User";
import Create from "./components/Create";

const Post = () => {
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
  };

  const createResource = async (id, title, body) => {
    await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",

      body: JSON.stringify({
        id: id,
        title: title,
        body: body,
      }),
      headers: { "content-type": "application/json; charset=UTF-8" },
    })
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
      <Create onAdd={createResource} key={resource.id} />
      {resource.map((list) => (
        <User key={list.id} id={list.id} title={list.title} body={list.body} />
      ))}
    </div>
  );
};

export default Post;
