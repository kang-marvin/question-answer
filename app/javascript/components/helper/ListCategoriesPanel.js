
import React from "react"
import { v4 as uuid } from 'uuid'

const CategoryPanel = props => {
  const { title } = props

  return (
    <div
      key={uuid()}
      className="
        max-w-sm rounded overflow-hidden
        shadow-lg inline-block bg-gray-200
      "
    >
      <div className="px-4 py-4 font-semibold text-center">
        {title}
      </div>
    </div>
  )
}

const ListCategoriesPanel = props => {
  const { categories } = props

  return (
    <div className="grid grid-cols-4 gap-2">
      {categories.map((category) => {
        return <CategoryPanel title={category.title} />
      })}
    </div>
  )
}


export default ListCategoriesPanel