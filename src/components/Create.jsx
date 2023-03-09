import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../index.css";
import axios from "axios";
import { listResources } from "../redux/actions/listResource";

const API_URL = "https://jsonplaceholder.typicode.com/posts?_start=0&_limit=5";

const Create = ({ onAdd }) => {
  const dispatch = useDispatch();
  const resources = useSelector((state) => state.allResources.resource);
  const { id, title, body } = resources;

  const createResource = async (listData) => {
    const response = await axios.get(API_URL, listData);
    if (response.data) {
      localStorage.getItem("list", JSON.stringify(response.data));
    }
    return response.data;
    dispatch(listResources(response.data));
  };

  useEffect(() => {
    createResource();
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    onAdd(e.target.title.value, e.target.body.value);
    e.target.title.value = "";
    e.target.body.value = "";
  };
  return (
    <div className="createItem">
      <form onSubmit={onSubmit}>
        <h2>create resource</h2>
        <h3>{id}</h3>
        <input placeholder="title" name="title" />
        <input placeholder="body" name="body" />
        <button onSubmit={onSubmit}>create</button>
        <hr />
      </form>
    </div>
  );
};

export default Create;
