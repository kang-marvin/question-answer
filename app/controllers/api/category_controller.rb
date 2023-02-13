module API
  class CategoryController < ApplicationController
    def index
      categories =
        Category
          .joins(:questions)
          .filter_title(category_params[:searchString])
          .paginate(page: params[:page], per_page: 20)

      render json: categories,
             each_serializer: LimitedCategorySerializer,
             meta: paginate_dict(categories),
             status: :ok
    end

    private

    def category_params
      params.permit(:searchString, :page)
    end
  end
end
