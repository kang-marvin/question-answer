import React, { useEffect, useState } from "react";
import AnchorTagField from "../form_fields/AnchorTagField";

const DEFAULT_PAGINATION = {
  currentPage: 1,
  nextPage: null,
  previousPage: null,
  totalPages: 1,
  totalEntries: 0
}

const PaginationPanel = props => {

  const {
    pagination = DEFAULT_PAGINATION,
    handlePaginate
  } = props

  const [meta, setMeta] = useState(DEFAULT_PAGINATION)

  useEffect(()=> {
    setMeta(pagination)
  }, [pagination])

  const EmptyFragment = () => {
    return (<div></div>)
  }

  return (
    <div className={`grid grid-cols-9 mt-6 place-content-center gap-1`}>

      <EmptyFragment />
      <EmptyFragment />

      <AnchorTagField
        label={"<< First"}
        value={meta.previousPage}
        active={false}
        handleClick={() => handlePaginate(1)}
      />

      <AnchorTagField
        label={"< Previous"}
        value={meta.previousPage}
        active={false}
        handleClick={() => handlePaginate(meta.previousPage)}
      />

      <AnchorTagField
        label={meta.currentPage}
        value={""}
        active={true}
        handleClick={null}
      />

      <AnchorTagField
        label={"Next >"}
        value={meta.nextPage}
        active={false}
        handleClick={() => handlePaginate(meta.nextPage)}
      />

      <AnchorTagField
        label={"Last >>"}
        value={meta.nextPage}
        active={false}
        handleClick={() => handlePaginate(meta.totalPages)}
      />

      <EmptyFragment />
      <EmptyFragment />

    </div>
  )
}

export default PaginationPanel