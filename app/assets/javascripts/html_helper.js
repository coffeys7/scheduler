/**
 * HTML Helper
 *
 * @constructor
 */
function HtmlHelper() {}

/**
 * Icons
 */
HtmlHelper.prototype.icons = function() {
    return {
        calculator: 'calculator',
        user: 'user',
        dollar: 'usd',
        plus: 'plus',
        minus: 'minus',
        times: 'times',
        percent: 'percent',
        check_circle: 'check-circle',
        times_circle: 'times-circle',
        pencil_square: 'pencil-square',
        info: 'info',
        info_circle: 'info-circle'
    }
};

/**
 * Make Icon
 *
 * @param name {String} - Name of the icon to use
 *
 * @return {Object} - { html: html string, querySelector: selected element }
 */
HtmlHelper.prototype.icon = function(name) {
    var that = this;
    return that.element('i', {
        attributes: {
            class: 'fa fa-' + that.icons()[name]
        }
    });
};

/**
 * Materialize Toast Wrapper
 *
 * @param opts {Object} - Toast options
 *      - opts.text {String} - Text for the toast
 *      - opts.html {String} - Html for the toast
 *      - opts.type {String} - Toast type ("success" || "alert")
 *      - opts.duration {Number} - Toast duration
 *      - opts.class {String} - Alternative toast class
 *      - opts.callback {Function} - Completion callback
 */
HtmlHelper.prototype.toast = function(opts) {
    var that = this;
    var text = opts.text || false;
    var html = opts.html || false;
    var duration = opts.duration || 2000;
    var type = opts.type || false;
    var className = opts.class || false;
    var callback = opts.callback || false;
    var $toastContent;
    if (type) {
        var icon;
        if (type === 'success') { className = 'alert-success'; icon = 'check_circle'; }
        if (type === 'alert')   { className = 'alert-danger'; icon = 'times_circle'; }
        if (type === 'warning') { className = 'alert-warning'; icon = 'info_circle'; }
        if (type === 'generic') { className = 'generic'; icon = 'info'; }
        var content = (that.icon(icon) + '&nbsp' + (html || text));
        $toastContent = $('<span/>').html(content);
    } else {
        $toastContent = (html) ? $(html) : text;
    }
    Materialize.toast($toastContent, duration, className, callback);
};

/**
 * Make Element
 *
 * @param element {String} - Name of the element ('i', 'p', ...)
 * @param opts {Object} - Element options
 *
 * @return {String} - Html string
 */
HtmlHelper.prototype.element = function(element, opts) {
    var that = this;
    var nonClosingTagElements = ['img', 'input'];
    var html = (opts && opts.html) ? opts.html : '';
    if (html.constructor === Array) { html = html.join(''); }
    var text = (opts && opts.text) ? opts.text.toString() : '';
    var attrs = (opts && opts.attributes) ? opts.attributes : false;
    var elem = '<' + element;
    elem += ( ((attrs) ? (' ' + that.makeAttributes(attrs)) : '') + '>' );
    if (!nonClosingTagElements.contains(element)) {
        elem += ((text || html) + '<' + element + '>');
    }
    return elem;
};

/**
 * Make attribute list string for element creation
 *
 * @param opts {Object} - Object with attributes {attr: val, ...}
 *
 * @return {String}
 */
HtmlHelper.prototype.makeAttributes = function(opts) {
    var totalAttrString = '';
    for (var key in opts) {
        var attrKeyString = key.toString().replaceAll('_', '-');
        var attrString = (attrKeyString + '="' + opts[key] + '"');
        totalAttrString += (attrString + ' ');
    }
    return totalAttrString.trim();
};