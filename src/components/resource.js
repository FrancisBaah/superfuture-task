import { useSelector } from "react-redux";
import "../index.css";

const Resource = () => {
  const resource = useSelector((state) => state.allResources.resources);
  const renderList = resource.map((list) => {
    const { id, title, body } = list;
    return (
      <div className="create" key={id}>
        <h1 className="round">{id}</h1>
        <h5>{title}</h5>
        <p>{body}</p>
      </div>
    );
  });
  return (
    <div>
      <h1>{renderList}</h1>
    </div>
  );
};

export default Resource;
