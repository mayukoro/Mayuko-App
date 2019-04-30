Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :products
  post '/users/signin' => 'users#signin'
  get '/users/:id' => 'users#show'
  resources :users
  # devise_for :users, :controllers => {sessions: 'sessions', registrations: 'registrations'}
end
