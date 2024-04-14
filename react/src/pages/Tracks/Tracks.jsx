import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useParams } from "react-router-dom";

import resourceService from "/src/services/resourcesService.js";

import { ResourceCard } from "/src/components/ResourceCard/ResourceCard";
import { TrackList } from "./components/TrackList";
import { smallMaxWidth } from "/src/styles";
import resourceTypeService from "../../services/resourceTypeService";

const Resources = () => {
  const [page, setPage] = useState(1);
  const [loadedResources, setLoadedResources] = useState([]);
  const [query, setQuery] = useSearchParams();
  const { type = "movie" } = useParams();

  const searchQuery = query.get("search") || "";

  useEffect(() => {
    setPage(1);
  }, [searchQuery]);

  useEffect(() => {
    const loadResources = async () => {
      let resourceType = await resourceTypeService.getTypeByName(type);

      let pagedResult = await resourceService.getPagedResources(
        resourceType.id,
        searchQuery,
        page
      );

      let resources = pagedResult.items;
      if (page > 1) {
        setLoadedResources((prev) => [...prev, ...resources]);
      } else {
        setLoadedResources([...resources]);
      }
    };

    loadResources();
  }, [page, searchQuery, type]);

  return (
    <>
      <section className={`${smallMaxWidth} `}>
        <TrackList />
      </section>
    </>
  );
};

export default Resources;
