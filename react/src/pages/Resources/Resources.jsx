import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useParams } from "react-router-dom";

import resourceService from "@/services/resourcesService.js";
import { range } from "@/lib/utils";

import { ResourceCard } from "@/pages/Resources/components/ResourceCard";
import { Search } from "./components/Search";
import resourceTypeService from "../../services/resourceTypeService";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import ThemeSwitch from "@/components/layout/theme-switch";
import { Layout, LayoutBody, LayoutHeader } from "@/components/layout/layout";

const Resources = () => {
  const [paginationPages, setPaginationPages] = useState([]);
  const [loadedResources, setLoadedResources] = useState([]);
  const [query, setQuery] = useSearchParams();
  const { type = "movie" } = useParams();

  const searchQuery = query.get("search") || "";
  const pageQuery = parseInt(query.get("page"), 10) || 1;

  const nextPage = () => {
    setQuery({ page: pageQuery + 1 });
  };

  const prevPage = () => {
    if (pageQuery > 1) {
      setQuery({ page: pageQuery - 1 });
    }
  };

  useEffect(() => {
    setQuery({ page: 1, search: searchQuery });
  }, [searchQuery]);

  useEffect(() => {
    const loadResources = async () => {
      let resourceType = await resourceTypeService.getTypeByName(type);

      let pagedResult = await resourceService.getPagedResources(
        resourceType.id,
        searchQuery,
        pageQuery
      );

      //pagination logic

      const totalPages = pagedResult.totalPages;
      if (totalPages > 1) {
        const currentPage = pageQuery;
        const offsetRange = 1;
        let pageCutLow = currentPage - offsetRange;
        let pageCutHigh = currentPage + offsetRange;

        let pages = [];

        let pagesRange = range(1, totalPages);
        for (const pageRange of pagesRange) {
          if (totalPages < 6) {
            pages.push(pageRange);
          } else {
            if (
              pageRange === 1 ||
              pageRange === totalPages ||
              (pageRange >= pageCutLow && pageRange <= pageCutHigh)
            ) {
              pages.push(pageRange);
            }
          }
        }

        // add elipis page placeholder
        if (totalPages >= 6) {
          let newPages = [];
          for (let i = 0; i < pages.length; i++) {
            let page = pages[i];
            newPages.push(page);

            // check next page to add elipsis placeholder
            if (i + 1 < pages.length && pages[i + 1] !== page + 1) {
              newPages.push(-1);
            }
          }
          pages = newPages;
        }

        setPaginationPages(pages);
      }
      else {
        setPaginationPages([]);
      }

      let resources = pagedResult.items;
      setLoadedResources([...resources]);
    };

    loadResources();
  }, [pageQuery, searchQuery, type]);

  return (
    <Layout>
      {/* ===== Top Heading ===== */}
      <LayoutHeader className="border-b">
        <div className="ml-auto flex items-center space-x-4">
          <Search setQuery={setQuery} />
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

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {loadedResources?.map((resource) => (
            <div
              key={resource.id}
              className="flex flex-col xs:gap-4 gap-2 rounded-lg lg:mb-6 md:mb-5 sm:mb-4 mb-[10px]"
            >
              <ResourceCard resource={resource} />
            </div>
          ))}
        </div>

        {paginationPages.length > 0 ? (
          <Pagination className="pt-8">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={prevPage}
                  disabled={pageQuery === 1}
                />
              </PaginationItem>
              {paginationPages.map((pageNumber) => {
                return pageNumber === -1 ? (
                  <PaginationItem className="hidden md:block">
                    <PaginationEllipsis />
                  </PaginationItem>
                ) : (
                  <PaginationItem key={pageNumber}>
                    <PaginationLink
                      href="#"
                      onClick={() => setQuery({ page: pageNumber })}
                      isActive={pageNumber === pageQuery}
                    >
                      {pageNumber}
                    </PaginationLink>
                  </PaginationItem>
                );
              })}
              <PaginationItem>
                <PaginationNext onClick={nextPage} />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        ) : (
          <></>
        )}
      </LayoutBody>
    </Layout>
  );
};

export default Resources;
