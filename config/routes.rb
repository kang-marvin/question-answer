Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "dashboard#index"

  namespace :api do
    scope :v1 do

      # Category Resource
      get 'categories', to: 'category#index'
      get 'category',   to: 'category#show'

      # Question Resource
      get 'question', to: 'question#show'
    end
  end

  get '*path', to: 'dashboard#index', via: :all
end
