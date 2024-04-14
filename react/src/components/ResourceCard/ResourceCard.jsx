import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ResourceInfo } from "./ResourceInfo";

function ResourceCard({ resource }) {
  return (
    <>
      <Link
        to={`/resource/${resource.id}`}
        className="dark:bg-[#1f1f1f] bg-[#f5f5f5] rounded-lg relative group w-[170px] select-none xs:h-[250px] h-[216px] overflow-hidden"
      >
        <img
          height={216}
          width={170}
          src={resource.fallbackCovers[0]}
          alt={resource.title}
          className="object-cover h-full w-full rounded-lg drop-shadow-md shadow-md group-hover:shadow-none group-hover:drop-shadow-none transition-all duration-300 ease-in-out"
        />
      </Link>
      <div className="grid gap-1">
        <ResourceInfo info={resource} />
      </div>
    </>
  );
}

export { ResourceCard };
