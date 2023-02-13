class ApplicationController < ActionController::Base

  def paginate_dict(object)
    {
      current_page:   object.current_page,
      next_page:      object.next_page,
      previous_page:  object.previous_page,
      total_pages:    object.total_pages,
      total_entries:  object.total_entries
    }
  end
end
