module ApplicationHelper

  # External libraries imported through CDN to load in the <head> tag
  # of views/layouts/application.html.erb
  def head_libs
    {
        :javascripts => {
            :tether       => '//npmcdn.com/tether@1.2.4/dist/js/tether.min.js',
            :materialize  => '//cdnjs.cloudflare.com/ajax/libs/materialize/0.99.0/js/materialize.min.js',
            :numeral      => '//cdnjs.cloudflare.com/ajax/libs/numeral.js/2.0.6/numeral.min.js'
        },
        :stylesheets => {
            :materialize    => '//cdnjs.cloudflare.com/ajax/libs/materialize/0.98.2/css/materialize.min.css',
            :material_icons => '//fonts.googleapis.com/icon?family=Material+Icons'
        }
    }
  end

end
