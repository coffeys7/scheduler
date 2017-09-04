Rails.application.routes.draw do

  # Devise
  devise_for :users

  devise_scope :user do
    get   '/users/logout' => 'devise/sessions#destroy'
  end

  # Generic
  root    'application#home'

  # Activities
  get     '/activities/:id'      => 'activities#edit'
  post    '/activities/create'        => 'activities#create'
  post    '/activities/update/:id'    => 'activities#update'
  delete  '/activities/destroy/:id'   => 'activities#destroy'

  # Users
  get     '/users/settings'       => 'home#settings'

end
