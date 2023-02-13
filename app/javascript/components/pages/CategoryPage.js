import React, { useEffect, useState } from "react";

import { categoryApi } from "../../api";
import ListCategoriesPanel from "../helper/ListCategoriesPanel";

import SearchPanel from "../helper/SearchPanel";
const DEFAULT_PAGINATION = {
  current_page: 1,
  next_page: null,
  previous_page: null,
  total_pages: 1,
  total_entries: 0
}

const INITIAL_STATE = {
  searchString: '',
  currentPage: 1,
  categories: [],
  pagination: DEFAULT_PAGINATION
}

const FetchCategoriesList = (searchParams) => {
  return categoryApi.getCategories(searchParams);
}

const CategoryPage = () => {
  const [state, setState] = useState(INITIAL_STATE)

  useEffect(() => {
    FetchAndUpdateCategories({page: state.currentPage})
  }, [state.currentPage])

  const FetchAndUpdateCategories = (searchParams) => {
    FetchCategoriesList(searchParams).then((response) => {
      setState({
        ...state,
        categories: (response.data.categories || []),
        searchString: (searchParams.searchString || ''),
        pagination: (response.data.meta || DEFAULT_PAGINATION)
      })
    })
  }

  const handleSearch = (searchParams) => {
    FetchAndUpdateCategories(searchParams)
  }

  return (
    <div>
      {/* Search Panel */}
      <SearchPanel
        searchString={state.searchString}
        placeholder={"Search categories"}
        handleSearch={handleSearch}
      />

      {/* List Categories */}
      <ListCategoriesPanel
        categories={state.categories}
      />

    </div>
  )
}

export default CategoryPage;