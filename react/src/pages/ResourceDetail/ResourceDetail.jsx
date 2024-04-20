import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import resourceService from "@/services/resourcesService.js";

const ResourceDetail = () => {
  const [resourceDetail, setResourceDetail] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const loadResourceDetail = async () => {
      let resource = await resourceService.getResource(id);
      setResourceDetail(resource);
    };

    loadResourceDetail();
  }, [id]);

  if (resourceDetail === null) {
    return <></>;
  }

  return (
    <>
      <div className="min-h-screen grid place-items-center font-mono bg-gray-900">
        <div className="bg-white rounded-md bg-gray-800 shadow-lg">
          <div className="md:flex px-4 leading-none max-w-4xl">
            <div className="flex-none ">
              <img
                src={resourceDetail.fallbackCovers[0]}
                alt={resourceDetail.name}
                className="h-72 w-56 rounded-md shadow-2xl transform -translate-y-4 border-4 border-gray-300 shadow-lg"
              />
            </div>

            <div className="flex-col text-gray-300">
              <p className="pt-4 text-2xl font-bold">{resourceDetail.name}</p>
              <hr />

              <p className="hidden md:block px-4 my-4 text-sm text-left">
                {resourceDetail.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResourceDetail;
