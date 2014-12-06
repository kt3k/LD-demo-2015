
/**
 * @class
 * @extends scene.common.Scene
 * IntroScene class handles the introduction scene of the level page.
 */
scene.level.IntroScene = (function () {
    'use strict';

    var exports = function (level) {
        this.level = level;

        this.pos = new pages.level.Positioner();

        this.chr = new domain.common.Ma();
        this.ball = new domain.level.Ball(this.pos.fieldMetrics());
    };

    var isPt = exports.prototype = new scene.common.Scene();

    isPt.start = function () {

        var that = this;

        var paperPos = this.pos.paperPos();

        this.chr.x = paperPos.left;
        this.chr.y = 800;

        that.chr.put();

        pages.common.BackgroundService.turnWhite();

        Promise.resolve().then(function () {

            return that.chr.moveTo('y', paperPos.top, 1000);

        }).then(function () {


        }).then(function () {

            that.ball.appear();

            return that.chr.disappear(1000);

        }).then(function () {

            return that.finish();

        });
    };

    return exports;

}());