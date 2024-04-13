import { Link } from "react-router-dom";

const ResourceTypeCard = (type) => {
  let resourceType = type.type;
  return (
    <>
      <Link to={`/resources/${resourceType.name}`}>
        <div
          className="resource-type-card 
          mx-auto max-w-sm shadow-xl bg-cover bg-center min-h-100 transform duration-500 hover:-translate-y-2 cursor-pointer group"
        >
          <div className="bg-black bg-opacity-20 min-h-100 px-10 flex flex-wrap flex-col pt-60 hover:bg-opacity-75 transform duration-300">
            <p className="text-white text-3xl mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
              {resourceType.name}
            </p>
            <div className="w-16 h-2 bg-yellow-500 rounded-full mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300"></div>
            <p className="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500 pb-2">
              Let's explore some { resourceType.name } and find something that you want to follow.
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export { ResourceTypeCard };
