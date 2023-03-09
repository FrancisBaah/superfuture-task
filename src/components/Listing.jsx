import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../index.css";
import axios from "axios";
import { listResources } from "../redux/actions/listResource";
import Resource from "./resource";

const API_URL = "https://jsonplaceholder.typicode.com/posts?_start=0&_limit=5";

const Listing = () => {
  const resources = useSelector((state) => state.allResources.resources);
  const dispatch = useDispatch();

  const fetchResource = async () => {
    const response = await axios.get(API_URL);
    if (response.data) {
      localStorage.getItem("list", JSON.stringify(response.data));
    }
    return response.data;
    dispatch(listResources(response.data));
  };

  useEffect(() => {
    fetchResource();
  }, []);

  return (
    <div>
      <Resource />
    </div>
  );
};

export default Listing;
