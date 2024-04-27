import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import resourceService from "@/services/resourcesService.js";
import ThemeSwitch from "@/components/layout/theme-switch";
import { Layout, LayoutBody, LayoutHeader } from "@/components/layout/layout";

const ResourceDetail = () => {
  const [resourceDetail, setResourceDetail] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const loadResourceDetail = async () => {
      let resourceId = parseInt(id, 10);
      if (!isNaN(resourceId)) {
        let resource = await resourceService.getResource(resourceId);
        setResourceDetail(resource);
      }
    };

    loadResourceDetail();
  }, [id]);

  if (resourceDetail === null) {
    return (
      <>
        <p>No details</p>
      </>
    );
  }

  return (
    <>
      <Layout>
        {/* ===== Top Heading ===== */}
        <LayoutHeader className="border-b">
          <div className="ml-auto flex items-center space-x-4">
            <ThemeSwitch />
          </div>
        </LayoutHeader>

        {/* ===== Main ===== */}
        <LayoutBody className="space-y-4">
          <div className="md:flex px-4">
                <div className="flex justify-center md:flex-none">
                  <img
                    src={resourceDetail.fallbackCovers[0]}
                    alt={resourceDetail.name}
                className="h-72 w-56 rounded-md shadow-lg transform border-4 border-gray-300"
                  />
                </div>

                <div className="flex-column md:pl-4 md:pr-56">
                  <p className="pt-4 text-2xl font-bold">
                    {resourceDetail.name}
                  </p>
                  <hr />

                  <p className="my-4 text-sm text-left">
                    {resourceDetail.description}
                  </p>
                </div>
              </div>
        </LayoutBody>
      </Layout>
    </>
  );
};

export default ResourceDetail;
