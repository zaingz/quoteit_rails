Rails.application.routes.draw do

  root 'home#index'

  resources :quotes

  devise_for :users, :controllers => { omniauth_callbacks: 'omniauth_callbacks' }
  match '/users/:id/finish_signup' => 'users#finish_signup', via: [:get, :patch], :as => :finish_signup
  get 'user/:id' => 'users#show', :as => "user"

end
