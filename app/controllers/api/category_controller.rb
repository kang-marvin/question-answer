module API
  class CategoryController < ApplicationController
    before_action :fetch_category, only: %i[show]

    def index
      categories =
        Category
          .joins(:questions)
          .filter_title(category_params[:searchString])
          .paginate(page: params[:page], per_page: 10)

      render json: categories,
             each_serializer: LimitedCategorySerializer,
             meta: paginate_dict(categories),
             status: :ok
    end

    def show
      render json: @category,
             serializer: CategorySerializer,
             status: :ok
    end

    private

    def fetch_category
      @category =
        Category.find(category_params[:identifier]) rescue Category.new
    end

    def category_params
      params.permit(:searchString, :page, :identifier)
    end

  end
end
