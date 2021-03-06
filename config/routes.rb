Rails.application.routes.draw do

  #
  # Devise initialize
  #
  devise_for :users

  #
  # Devise scope customization
  #
  devise_scope :user do
    get   '/users/logout' => 'devise/sessions#destroy'
  end

  #
  # Generic
  #
  root    'home#calendar'

  #
  # Calendar
  #
  get     '/calendar'                 => 'home#calendar'

  #
  # Activities
  #
  get     '/activities/:id'           => 'activities#edit'
  post    '/activities/create'        => 'activities#create'
  post    '/activities/update/:id'    => 'activities#update'
  get     '/activities/destroy/:id'   => 'activities#destroy'
  get     '/replace_activities'       => 'activities#replace'

  #
  # Users
  #
  get     '/users/settings'           => 'home#settings'

end
