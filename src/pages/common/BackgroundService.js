window.pages = window.pages || {};
pages.common = pages.common || {};

/**
 * @class
 * BackgroundService handles the animation of background colors.
 */
pages.common.BackgroundService = (function ($) {
    'use strict';

    var exports = {};

    exports.turnWhite = function () {
        $(document.body).removeClass('dark-bg');

        return wait(1000);
    };

    exports.turnBlack = function () {
        $(document.body).addClass('dark-bg');

        return wait(1000);
    };

    return exports;
}(window.jQuery));