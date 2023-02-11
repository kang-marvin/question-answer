import React, { useState } from "react";

import { InputField, SubmitField } from "../form_fields";

const SearchPanel = props => {
  const {
    searchString = '',
    placeholder = '',
    label = 'Search',
    handleSearch
  } = props

  const [queryString, setQueryString] = useState(searchString);

  const handleInputChange = (e) => {
    setQueryString(e.target.value)
  }

  const handleSubmit = () => {
    handleSearch({ searchString: queryString })
    setQueryString("")
  }

  return (
    <div class="md:flex md:items-center mb-6 gap-1">
      <div class="md:w-2/3">
        <InputField
          queryString={queryString}
          placeholder={placeholder}
          handleInputChange={handleInputChange}
        />
      </div>
      <div class="md:w-1/3">
        <SubmitField
          label={label}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  )
}

export default SearchPanel;