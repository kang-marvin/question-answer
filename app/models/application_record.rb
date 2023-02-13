class ApplicationRecord < ActiveRecord::Base
  primary_abstract_class

  def content_body(parent)
    parent.content.body.to_html
  rescue StandardError
    nil
  end
end
