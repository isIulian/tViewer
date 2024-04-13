import { useState, useEffect } from "react";
import resourceService from "/src/services/resourcesService.js";
import { ResourceCard } from "../../components/ResourceCard/ResourceCard";

const Home = function () {
  const [resources, setResources] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const data = await resourceService.getResources();
        let fetchedResources = data.slice(0, 25);
        setResources(fetchedResources);
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
    <div className='space-y-6'>
    <div className='w-full'>
      <h1 className='text-xl font-light tracking-wide'>{resources.length}</h1>
    </div>
    <div className='grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
    {resources.map((resource) => (
          <ResourceCard key={resource.id} resource={resource} />
        ))}
    </div>
  </div>
  );
};

export default Home;
