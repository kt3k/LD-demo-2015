

/**
 * @class
 * MaLocateService class provide the functionality to move character among the doors in a floor.
 */
domain.map.CharLocateService = (function () {
    'use strict';

    var exports = function (wall, chr) {
        this.wall = wall;
        this.chr = chr;
        this.charPosRepo = new datadomain.CharPositionRepository();
    };

    var clsPt = exports.prototype;

    clsPt.charAppear = function () {
        var wo = this.wall.findById(this.position.floorObjectId);
        this.current = wo;
        var chr = this.chr;

        var x = wo.centerX();
        var y = wo.centerY();

        chr.x = x;
        chr.y = y;

        return wo.open().then(function () {
            chr.appear();
        });
    };

    clsPt.moveToWallObjectByName = function (name) {
        return this.moveToWallObject(this.wall.findById(name));
    };

    clsPt.moveToWallObject = function (wo) {
        var that = this;

        var current = this.wall.findById(this.position.floorObjectId);

        this.position.floorObjectId = wo.id;
        this.charPosRepo.setCharPosition(this.chr.name, this.position);

        var goOutDur = 400;
        var moveOnCorridor = 1000;
        var goIntoDur = 400;

        var goOutDistance = 80;

        if (!this.wall.visible(this.chr)) {
            this.wall.scrollSet(current.centerX());
        }

        current.close();

        return this.chr.moveTo('y', this.wall.groundLevel + goOutDistance, goOutDur).then(function () {

            that.wall.scrollTo(wo.centerX(), moveOnCorridor);

            wo.open();

            return that.chr.moveTo('x', wo.centerX(), moveOnCorridor);

        }).then(function () {

            return that.chr.moveTo('y', wo.centerY(), goIntoDur);

        }).then(function () {

            that.current = wo;

            return that.chr.turn('down');

        });
    };

    clsPt.getIntoDoor = function () {
        var that = this;

        this.chr.turn('up');

        return this.chr.disappear().then(function () {
            return that.current.close();
        });
    };

    clsPt.load = function () {
        var that = this;

        return this.charPosRepo.getCharPosition(this.chr.name).then(function (position) {
            that.position = position;

            return that;
        });
    };

    clsPt.setCharPosition = function (position) {
        return this.charPosRepo.setCharPosition(this.chr.name, position);
    };

    return exports;

}());
