
import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";

const CategoryQuestionsPage = (identifier) => {
  return `/category/${identifier}/questions`;
}

const CategoryPanel = props => {
  const { title, identifier } = props

  return (
    <Link
      to={CategoryQuestionsPage(identifier)}
      key={uuid()}
      className="
        max-w-sm rounded overflow-hidden
        shadow-lg inline-block bg-gray-200
        hover:bg-gray-300
      "
    >
      <p className="px-4 py-4 font-semibold text-center">
        {title}
      </p>
    </Link>
  )
}

const ListCategoriesPanel = props => {
  const { categories } = props;

  return (
    <div className="grid grid-cols-4 gap-2">
      {categories.map((category) => {
        return (
          <CategoryPanel
            title={category.title}
            identifier={category.id}
          />
        )
      })}
    </div>
  )
}

export default ListCategoriesPanel;