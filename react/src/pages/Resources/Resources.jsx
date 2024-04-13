import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useParams } from "react-router-dom";

import resourceService from "/src/services/resourcesService.js";

import { ResourceCard } from "/src/components/ResourceCard/ResourceCard";
import { Search } from "./components/Search";
import { smallMaxWidth } from "/src/styles";
import resourceTypeService from "../../services/resourceTypeService";

const Resources = () => {
  const [page, setPage] = useState(1);
  const [loadedResources, setLoadedResources] = useState([]);
  const [query, setQuery] = useSearchParams();
  const { type = "movie"} = useParams();

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
        <Search setQuery={setQuery} />

        <div className="flex flex-wrap xs:gap-4 gap-[14px] justify-center">
          {loadedResources?.map((resource) => (
            <div
              key={resource.id}
              className="flex flex-col xs:gap-4 gap-2 rounded-lg lg:mb-6 md:mb-5 sm:mb-4 mb-[10px]"
            >
              <ResourceCard resource={resource} />
            </div>
          ))}
        </div>

        <div className="w-full flex items-center justify-center">
          <button
            type="button"
            onClick={() => {
              setPage(page + 1);
            }}
            className="sm:py-2 xs:py-[6px] py-1 sm:px-4 xs:px-3 px-[10.75px] bg-elegantViolet-900 text-gray-50 rounded-full md:text-[15.25px] sm:text-[14.75px] xs:text-[14px] text-[12.75px] shadow-md hover:-translate-y-1 transition-all duration-300 font-medium font-nunito lg:my-8 my-7"
          >
            Load more
          </button>
        </div>

      </section>
    </>
  );
};

export default Resources;
