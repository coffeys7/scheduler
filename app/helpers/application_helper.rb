module ApplicationHelper

  # External libraries imported through CDN to load in the <head> tag
  # of views/layouts/application.html.erb
  def head_libs
    {
        :javascripts => {
            :tether       => '//npmcdn.com/tether@1.2.4/dist/js/tether.min.js',
            :numeral      => '//cdnjs.cloudflare.com/ajax/libs/numeral.js/2.0.6/numeral.min.js'
        },
        :stylesheets => {
            :material_icons => '//fonts.googleapis.com/icon?family=Material+Icons'
        }
    }
  end

  # Get calendar icon for the current date
  def calendar_icon(day=Time.now.day)
    image_path("calendar-#{ day }.png")
  end

end
