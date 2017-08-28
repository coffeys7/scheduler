////////////////////////////////////////////////////////////////////////////////
//
// String Formatting Methods
//
////////////////////////////////////////////////////////////////////////////////

/**
 * Format the selected elements with decimals and commas. If the cell's value is not a real number, the
 * function will return before attempting any formatting.
 *
 * @param sel {String} - Selector for the "calling" cell
 */
function formatMonetary(sel) {
    var elements = $(sel);
    elements.each(function() {
        var numeralVal = numeral($(this).val());
        if (!numeralVal.value()) { return; }
        $(this).val(numeralVal.format('$  0,0.00'));
        return $(this);
    });
}

/**
 * Format the selected elements with decimals and commas. If the cell's value is not a real number, the
 * function will return before attempting any formatting.
 *
 * @param sel {String} - Selector for the "calling" cell
 */
function formatNumber(sel) {
    var elements = $(sel);
    elements.each(function() {
        var numeralVal = numeral($(this).val());
        if (!numeralVal.value()) { return; }
        $(this).val(numeralVal.format('0,0.00'));
        return $(this);
    });
}

/**
 * Format the selected elements with decimals and commas. If the cell's value is not a real number, the
 * function will return before attempting any formatting.
 *
 * @param sel {String} - Selector for the "calling" cell
 */
function formatPercent(sel) {
    var elements = $(sel);
    elements.each(function() {
        var numeralVal = numeral($(this).val());
        if (!numeralVal.value()) { return; }
        $(this).val(numeralVal.format('0.0  %)'));
        return $(this);
    });
}