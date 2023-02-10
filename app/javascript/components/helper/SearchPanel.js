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
    <div>
      <InputField
        queryString={queryString}
        placeholder={placeholder}
        handleInputChange={handleInputChange}
      />

      {/* Submit Button */}
      <SubmitField
        label={label}
        handleSubmit={handleSubmit}
      />
    </div>
  )
}

export default SearchPanel;