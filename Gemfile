source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

# Rails
gem 'rails', '~> 5.1.2'

# Puma (app server)
gem 'puma', '~> 3.7'

# Sass
gem 'sass-rails', '~> 5.0'

# Materialize
gem 'materialize-sass'

# Mustache
gem 'mustache-js-rails'

# Uglifier (JavaScript Compressor)
gem 'uglifier', '>= 1.3.0'

# Postgres (Database Adapter)
gem 'pg'

# Devise (Authentication)
gem 'devise'

# Simple Calendar
gem 'simple_calendar', '~> 2.0'

# Figaro (Rails App {ENV} Configuration)
gem 'figaro'

# jQuery/jQueryUI (JavaScript DOM Framework)
gem 'jquery-rails'

# jQuery UI
gem 'jquery-ui-rails'

# Font Awesome (Icons)
gem 'font-awesome-sass', '~> 4.7.0'

# Turbolinks (App Navigation)
gem 'turbolinks', '~> 5'

# JBuilder (JSON Builder DSL)
gem 'jbuilder', '~> 2.5'

#
# Development, Pages
#
group :development, :pages do
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem 'capybara', '~> 2.13'
  gem 'selenium-webdriver'
end

#
# Development
#
group :development do
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

#
# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
#
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
