import React, { useState } from "react";

import { categoryApi } from "../../api";

import SearchPanel from "../helper/SearchPanel";

const FetchCategoriesList = (searchParams) => {
  return categoryApi.getCategories(searchParams);
}

const CategoryPage = () => {

  const [state, setState] = useState({ categories: [] })

  const handleSearch = (searchParams) => {
    FetchCategoriesList(searchParams).then((response) => {
      setState({...state, categories: (response.data.categories || [])})
    })
  }

  return (
    <div>
      {/* Search Panel */}
      <SearchPanel
        placeholder={"Search categories"}
        handleSearch={handleSearch}
      />
    </div>
  )
}

export default CategoryPage;