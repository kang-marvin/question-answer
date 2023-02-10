import React, { useState } from "react";

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
      {/* Input Field */}
      <input
        type="text"
        value={queryString}
        placeholder={placeholder}
        onChange={handleInputChange}
      />

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
      >
        {label}
      </button>
    </div>
  )
}

export default SearchPanel;