// The ball you move, or swipe
window.domain = window.domain || {};
domain.level = domain.level || {};
/**
 * @class
 * Ball class represents the ball inside the field of the level.
 */
domain.level.Ball = (function ($) {
    'use strict';

    var exports = function (metrics) {
        this.transDur = 800;
        this.x = 1;
        this.y = 1;
        this.MAX = 3;
        this.$dom = $('.circle')
            .css({width: metrics.unit + 'px', height: metrics.unit + 'px'});

        this.metrics = metrics;

        this.locate();
    };

    var ballPrototype = exports.prototype;

    ballPrototype.appear = function () {

        console.log('ball appear');

        this.$dom.css('visibility', 'visible');

        return this.$dom.anim('ball-appear', this.transDur);
    };

    ballPrototype.disappear = function () {
        var that = this;

        that.$dom.css('visibility', 'hidden');

        return this.$dom.anim('ball-disappear', 400);
    };

    ballPrototype.up = function () { this.setPos(this.posAhead('up')); };
    ballPrototype.down = function () { this.setPos(this.posAhead('down')); };
    ballPrototype.left = function () { this.setPos(this.posAhead('left')); };
    ballPrototype.right = function () { this.setPos(this.posAhead('right')); };

    ballPrototype.pos = function () {
        return {x: this.x, y: this.y};
    };

    ballPrototype.posAhead = function (dir) {
        switch (dir) {
            case 'up': return this.relativePos(0, -1);
            case 'down': return this.relativePos(0, 1);
            case 'left': return this.relativePos(-1, 0);
            case 'right': return this.relativePos(1, 0);
        }
    };

    ballPrototype.relativePos = function (x, y) {
        return {x: (this.x + x + this.MAX) % this.MAX, y: (this. y + y + this.MAX) % this.MAX};
    };

    ballPrototype.setPos = function (pos) {
        this.x = pos.x;
        this.y = pos.y;

        this.locate();
    };

    ballPrototype.locate = function () {
        this.$dom.css('top', this.metrics.top + this.y * this.metrics.unit + 'px');
        this.$dom.css('left', this.metrics.left + this.x * this.metrics.unit + 'px');
    };

    ballPrototype.refuseToMove = function (dir) {
        if (dir === 'up' || dir === 'down') {
            this.$dom.animation('ball-refuse-y 300ms');
        } else {
            this.$dom.animation('ball-refuse-x 300ms');
        }

        return wait(window.NUDUR);
    };

    return exports;
}(window.jQuery));