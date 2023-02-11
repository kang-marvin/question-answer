import React, { useEffect, useState } from "react";

import { categoryApi } from "../../api";
import ListCategories from "../helper/CategoryPanel";

import SearchPanel from "../helper/SearchPanel";

const INITIAL_STATE = {
  searchString: '',
  currentPage: 1,
  categories: []
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
        categories: (response.data || []),
        searchString: (searchParams.searchString || '')
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
      <ListCategories
        categories={state.categories}
      />

    </div>
  )
}

export default CategoryPage;