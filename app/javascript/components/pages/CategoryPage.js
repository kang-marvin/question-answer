import React, { useEffect, useState } from "react";

import { categoryApi } from "../../api";
import InitialState from "../../data/InitialState";
import { ListCategoriesPanel, PaginationPanel, SearchPanel } from "../helper";

const DEFAULT_PAGINATION = InitialState.pagination;

const INITIAL_STATE = {
  searchString: "",
  categories: [],
  pagination: DEFAULT_PAGINATION,
};

const FetchCategoriesList = (searchParams) => {
  return categoryApi.getCategories(searchParams);
};

const CategoryPage = () => {
  const [state, setState] = useState(INITIAL_STATE);

  useEffect(() => {
    FetchAndUpdateCategories({ page: state.pagination.currentPage });
  }, [state.pagination.currentPage]);

  const FetchAndUpdateCategories = (searchParams) => {
    FetchCategoriesList(searchParams).then((response) => {
      setState({
        ...state,
        categories: response.data.categories || [],
        searchString: searchParams.searchString || "",
        pagination: response.data.meta || DEFAULT_PAGINATION,
      });
    });
  };

  const handleSearch = (searchParams) => {
    FetchAndUpdateCategories(searchParams);
  };

  const handlePaginate = (page) => {
    FetchAndUpdateCategories({
      searchString: state.searchString,
      page: page,
    });
  };

  return (
    <div>
      {/* Search Panel */}
      <SearchPanel
        searchString={state.searchString}
        placeholder={"Search categories"}
        handleSearch={handleSearch}
      />

      {/* List Categories */}
      <ListCategoriesPanel categories={state.categories} />

      {/* Add Pagination */}
      <PaginationPanel
        pagination={state.pagination}
        handlePaginate={handlePaginate}
      />
    </div>
  );
};

export default CategoryPage;
