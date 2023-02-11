
import React, { useId } from "react"

const CategoryPanel = props => {
  const { title } = props

  return (
    <div
      className="
        max-w-sm rounded overflow-hidden
        shadow-lg inline-block bg-gray-200"
      key={useId}
    >
      <div className="px-4 py-4 font-semibold text-center">
        {title}
      </div>
    </div>
  )
}

const ListCategories = props => {
  const { categories } = props

  return (
    <div className="grid grid-cols-4 gap-2">
      {categories.map((category) => {
        return <CategoryPanel title={category.title} />
      })}
    </div>
  )
}


export default ListCategories