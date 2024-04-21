import { useState, useEffect } from "react";
import resourceService from "@/services/resourcesService.js";
import { ResourceCard } from "../../components/ResourceCard/ResourceCard";
import resourceTypeService from "../../services/resourceTypeService";
import { ResourceTypeCard } from "./components/ResourceTypeCard";

const Home = function () {
  const [resources, setResources] = useState([]);
  const [resourceTypes, setResourceTypes] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const data = await resourceService.getResources();
        const loadedResourceTypes = await resourceTypeService.getTypes();
        let fetchedResources = data.slice(0, 25);
        setResources(fetchedResources);
        setResourceTypes(loadedResourceTypes);
        setError(null);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <section className="container mx-auto p-10 md:py-20 px-0 md:p-20 md:px-0 antialiased">
        <section className="grid lg:grid-cols-2 2xl:grid-cols-3 grid-cols-1 gap-20 ">
          {resourceTypes.map((type) => (
            <ResourceTypeCard key={type.id} type={type} />
          ))}
        </section>
      </section>
    </>
  );
};

export default Home;
