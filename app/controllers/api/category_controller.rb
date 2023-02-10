module API
  class CategoryController < ApplicationController
    def index
      categories =
        Category
          .joins(:questions)
          .filter_title(category_params[:searchString])

      render json: categories,
             each_serializer: CategorySerializer,
             status: :ok
    end

    private

    def category_params
      params.permit(:searchString, :page)
    end
  end
end
