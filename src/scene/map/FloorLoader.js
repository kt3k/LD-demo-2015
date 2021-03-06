

/**
 * FloorLoader loads the floor data according to the current position of the character.
 */
scene.map.FloorLoader = subclass(scene.common.Scene, function (pt) {
    'use strict';

    pt.constructor = function () {

        this.charPosRepo = new datadomain.CharPositionRepository();
        this.floorRepo = new datadomain.FloorRepository();
        this.chr = new domain.common.Ma();

    };

    pt.start = function () {

        var that = this;

        this.charPosRepo.getCharPosition(this.chr.name).then(function (charPos) {

            return that.floorRepo.getById(charPos.floorId);

        }).then(function (floor) {

            that.floor = floor;

            that.finish();

        });
    };

});
