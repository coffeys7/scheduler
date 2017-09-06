/**
 * Calendar
 * @constructor
 *
 * @requires jQuery
 */
function Calendar(sel) {
    this.element = $(sel);
    this.tableCells = $(sel + ' td.day');
    this.activities = $(sel + ' li.activity');
    this.initialize();
}

/**
 * Move activity from one day to another
 *
 * @param activity {jQuery} - Activity element to move
 * @param day {jQuery} - Table cell for the day to move the activity to
 */
Calendar.prototype.moveActivity = function(activity, day) {
    var that = this;
};

/**
 * Initialize the calendar
 */
Calendar.prototype.initialize = function() {
    var that = this;
    that.setupHandlers();
};

/**
 * Setup handler events within the calendar
 */
Calendar.prototype.setupHandlers = function() {
    var that = this;

    //
    // Activity drag functionality
    //
    console.log("Number of activities: " + that.activities.length);
    console.log("Number of table cells: " + that.tableCells.length);
    that.activities.draggable({
        helper: 'clone',
        containment: 'document',
        start: function(event, ui) {
            // triggered when dragging stopped
            // i.e. change width [ ui.helper.width(x) ]
            console.log("Drag started");
            ui.helper.css('opacity', 0.75);
        },
        drag: function(event, ui) {
            // triggered when mouse moves during drag
            console.log("Dragging");
        },
        stop: function(event, ui) {
            // triggered when element is let go of
            console.log("Drag stopped");
        }
    });

    //
    // Table cell drop functionality
    //
    that.tableCells.droppable({
        tolerance: 'fit',
        hoverClass: 'drag-over',
        drop: function(event, ui) {
            // triggered when an accepted draggable is dropped
            console.log("Activity dropped");
        },
        over: function(event, ui) {
            // triggered when an accepted draggable is over this
            console.log("Draggable entered");
        },
        out: function(event, ui) {
            // triggered when accepted draggable moves back out
            console.log("Draggable left");
        }
    });
};