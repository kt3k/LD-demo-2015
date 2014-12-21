/**
 * EvalResultProcessor class handles the evaluation result of the pair of the cells.
 *
 * @class
 */
domain.level.EvalResultProcessor = (function () {
    'use strict';

    var exports = function (trashBox, fusionBox, exitQueue) {
        this.trashBox = trashBox;
        this.fusionBox = fusionBox;
        this.exitQueue = exitQueue;
    };

    var erpPrototype = exports.prototype;

    erpPrototype.process = function (result, hook) {

        wait().then(function () {
            hook(result);
        });

        var promises = [];
        var that = this;

        result.goTrash.forEach(function (cell) {

            promises.push(that.trashBox.take(cell));

        });

        result.goQueue.forEach(function (cell) {

            promises.push(that.exitQueue.take(cell));

        });

        result.goFusion.forEach(function (pair) {

            promises.push(that.fusionBox.take(pair).then(function (cell) {

                return that.exitQueue.take(cell);

            }));

        });

        return Promise.all(promises);
    };

    return exports;
}());
