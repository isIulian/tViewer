import { Link } from "react-router-dom";
import { ResourceInfo } from "./ResourceInfo";

function ResourceCard({ resource }) {
  return (
    <>
      <Link
        to={`/resource/${resource.id}`}
        className="select-none xs:h-[250px] h-[216px] overflow-hidden"
      >
        <img
          src={resource.fallbackCovers[0]}
          alt={resource.title}
          className="object-cover h-full w-full rounded-lg transition-all duration-300 ease-in-out hover:scale-110"
        />
      </Link>
      <div className="grid gap-1">
        <ResourceInfo info={resource} />
      </div>
    </>
  );
}

export { ResourceCard };
