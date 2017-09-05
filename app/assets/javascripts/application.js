// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require turbolinks
//= require jquery
//= require materialize-sprockets
//= require_tree .


////////////////////////////////////////////////////////////////////////////////
//
// Document [turbolinks:load]
//
////////////////////////////////////////////////////////////////////////////////

//
// HTML Helper
//
var HTMLHelper = new HtmlHelper();

function prepareComponents() {
    //
    // Modals
    //
    $('.modal').modal();

    //
    // Collapsibles
    //
    $('.collapsible').collapsible();

    //
    // Dropdowns
    //
    $('.dropdown-button').dropdown({
        hover: true,
        belowOrigin: true,
        inDuration: 400,
        outDuration: 200
    });

    //
    // Authenticity Tokens
    //
    $('input[name="authenticity_token"].fill').val($('#CSRF_TOK').val());

    //
    // Timepicker
    //
    $('.timepicker').pickatime({
        default: 'now',
        fromnow: 0,
        twelvehour: true,
        donetext: 'OK',
        cleartext: 'Clear',
        canceltext: 'Cancel',
        autoclose: false,
        ampmclickable: true,
        aftershow: function(){}
    });

    //
    // Datepicker
    //
    $('.datepicker').pickadate({
        selectMonths: true,
        selectYears: 15,
        today: 'Today',
        clear: 'Clear',
        close: 'Ok',
        closeOnSelect: false
    });

    //
    // Select fields
    //
    $('select').material_select();
}

/**
 * Document on [turbolinks:load]
 */
$(document).on('turbolinks:load', function() {
    console.log("Turbolinks loaded");
    prepareComponents();
}).on('page:change', function() {
    prepareComponents();
}).ready(function() {
    prepareComponents();
});
