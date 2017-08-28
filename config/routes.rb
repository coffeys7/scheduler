Rails.application.routes.draw do

  # Devise
  devise_for :users
  devise_scope :user do
    get '/users/logout' => 'devise/sessions#destroy'
  end

  # Generic
  root 'application#home'

end
