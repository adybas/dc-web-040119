Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # get '/cats', to: 'cats#index'
  # get '/hobbies', to: 'hobbies#index'
  resources :cats
  resources :hobbies
  get '/easter-egg', to: 'cats#random'
end
