Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :follows, only: [:create, :destroy]
    get '/posts/search', to: 'posts#search'
    resources :posts
  end
end
