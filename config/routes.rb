Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "dashboard#index"
  # get '*path', to: 'dashboard#index', via: :all

  namespace :api do
    scope :v1 do

      # Category Resource

      get 'categories', to: 'category#index'
    end
  end
end
