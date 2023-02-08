class ApplicationRecord < ActiveRecord::Base
  primary_abstract_class

  def content_body(self)
    self.content.body.to_html
  end
end
