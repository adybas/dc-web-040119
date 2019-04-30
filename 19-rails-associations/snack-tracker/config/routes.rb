Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :snacks
  resources :retailers, only: [:index, :show]
  
  get('/favorites', {to: 'snacks#favorites', as: 'favorites'})
end
