"use strict";
exports.__esModule = true;
exports.filterIngredient = void 0;
exports.filterIngredient = function (props) {
    var str = 'strIngredient';
    var str2 = 'strMeasure';
    var result = [];
    for (var i = 1; i <= 10; i++) {
        var ingredient = props["" + str + i];
        var measure = props["" + str2 + i];
        if (!ingredient) {
            break;
        }
        if (measure) {
            var completeSentence = ingredient + ' - ' + measure;
            result.push(completeSentence);
        }
    }
    return result;
};
