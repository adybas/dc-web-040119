Rails.application.routes.draw do

  get '/login', to: "sessions#new", as: "login"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy", as: "logout"
  resources :users, only: [:new, :create]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :snacks
  resources :retailers do 
    resources :snacks, only: [:index, :show]
  end
  
  get('/my_favorites', {to: 'snacks#favorites', as: 'favorites'})

  resources :favorites, only: [:new, :create], as: "yummy"
end
