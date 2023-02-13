class ApplicationController < ActionController::Base
  def paginate_dict(object)
    {
      currentPage: object.current_page,
      nextPage: object.next_page,
      previousPage: object.previous_page,
      totalPages: object.total_pages,
      totalEntries: nil #object.total_entries
    }
  end
end
