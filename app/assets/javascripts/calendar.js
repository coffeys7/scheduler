/**
 * Calendar
 * @constructor
 *
 * @requires jQuery
 */
function Calendar(sel) {
    this.element = $(sel);
    this.tableCells = function() { return $(sel + ' td.day'); };
    this.activities = function() { return $(sel + ' li.activity'); };
    this.activityFormHtml = function() { return $('#activity-form-cache').html() };
    this.initialize();
}

/**
 * Move activity from one day to another
 *
 * @param replace {jQuery} - Activity element to replace
 * @param move {jQuery} - Activity element to move
 */
Calendar.prototype.replace = function(replace, move) {
    var that = this;
    var replacingDay = $(replace).parent('ul').attr('date-attr');
    var moveId = $(replace).attr('id-attr');
    var movingDay = $(move).parent('ul').attr('date-attr');
    console.log('Replacing activity from day ' + replacingDay + ' to day ' + movingDay);
    replace.remove();
    move.removeClass('--moving');
    $.ajax({
        url: '/replace_activities?move_id=' + moveId + '&move=' + movingDay,
        method: 'GET',
        success: function() {
            console.log('Successfully replaced days');
        }
    });
};

/**
 * Initialize the calendar
 */
Calendar.prototype.initialize = function() {
    var that = this;
    that.setupHandlers();
};

/**
 * Setup draggables
 */
Calendar.prototype.setupDraggables = function() {
    var that = this;
    //
    // Activity drag functionality
    //
    console.log("Number of activities: " + that.activities().length);
    console.log("Number of table cells: " + that.tableCells().length);
    that.activities().draggable({
        helper: 'clone',
        start: function(event, ui) {
            ui.helper.width($(this).width()/2);
            $(this).addClass('--replacing');
        },
        drag: function(event, ui) {
            // triggered when mouse moves during drag
        },
        stop: function(event, ui) {
            // triggered when element is let go of
        }
    });
};

Calendar.prototype.setupDroppables = function() {
    var that = this;
    //
    // Table cell drop functionality
    //
    that.tableCells().droppable({
        tolerance: 'pointer',
        hoverClass: 'drag-over',
        drop: function(event, ui) {
            //$('.--replacing').remove();
            $(this).find('ul')
                .append(ui.helper.clone()
                    .addClass('--moving')
                    .removeClass('ui-draggable')
                    .removeClass('ui-draggable-handle')
                    .removeClass('ui-draggable-dragging')
                    .css('position', 'relative')
                    .css('left', '')
                    .css('right', '')
                    .css('top', '')
                    .css('bottom', '')
                    .css('width', '100%'));
            that.replace($('.--replacing'), $('.--moving'));
            that.setupDraggables();
        },
        over: function(event, ui) {
            // triggered when an accepted draggable is over this
        },
        out: function(event, ui) {
            // triggered when accepted draggable moves back out
        }
    });
};

/**
 * Setup handler events within the calendar
 */
Calendar.prototype.setupHandlers = function() {
    var that = this;
    that.setupDraggables();
    that.setupDroppables();

    //
    // Activity popover initialization
    //
    // that.activities().click(function() {
    //     $('#activity-dialog').html($(this).html()).dialog();
    // });
};