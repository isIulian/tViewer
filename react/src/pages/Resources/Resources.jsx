import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useParams } from "react-router-dom";

import resourceService from "@/services/resourcesService.js";

import { ResourceCard } from "@/components/ResourceCard/ResourceCard";
import { Search } from "./components/Search";
import { smallMaxWidth } from "@/styles";
import resourceTypeService from "../../services/resourceTypeService";

import { Search as SearchShadCn } from '@/components/custom/search'
import ThemeSwitch from '@/components/layout/theme-switch'
import { Layout, LayoutBody, LayoutHeader } from '@/components/layout/layout'

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
    <Layout>
      {/* ===== Top Heading ===== */}
      <LayoutHeader className="border-b">
        <div className="ml-auto flex items-center space-x-4">
          <SearchShadCn />
          <ThemeSwitch />
        </div>
      </LayoutHeader>

      {/* ===== Main ===== */}
      <LayoutBody className="space-y-4">
        <div className="flex items-center justify-between space-y-2">
          <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
            {type}
          </h1>
        </div>

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
      </LayoutBody>
    </Layout>
  );
};

export default Resources;
