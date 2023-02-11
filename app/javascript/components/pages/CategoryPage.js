import React, { useEffect, useState } from "react";

import { categoryApi } from "../../api";
import ListCategories from "../helper/CategoryPanel";

import SearchPanel from "../helper/SearchPanel";

const FetchCategoriesList = (searchParams) => {
  return categoryApi.getCategories(searchParams);
}

const CategoryPage = () => {

  const [state, setState] = useState({ currentPage: 1, categories: [] })

  useEffect(() => {
    FetchAndUpdateCategories({page: state.currentPage})
  }, [state.currentPage])

  const FetchAndUpdateCategories = (searchParams) => {
    FetchCategoriesList(searchParams).then((response) => {
      setState({...state, categories: (response.data || [])})
    })
  }

  const handleSearch = (searchParams) => {
    FetchAndUpdateCategories(searchParams)
  }

  return (
    <div>
      {/* Search Panel */}
      <SearchPanel
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