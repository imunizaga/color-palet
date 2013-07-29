/*global $: false */
/*global console: false */
/*global document: false */
/*global alert: false */
/*global window: false */
/*global navigator: false */
//
// Run our kitten generation script as soon as the document's DOM is ready.
document.addEventListener('DOMContentLoaded', function () {
    "use strict";

    var colorPalet = {
        drawColorBoxes: function () {
            var inputs, i, input, boxes, box;
            inputs = document.getElementsByClassName('color-input');
            for (i = 0; i < inputs.length; i += 1) {
                input = inputs[i];
                input.value = "FFFFFF";
            }

            boxes = document.getElementsByClassName('color-box');
            for (i = 0; i < boxes.length; i += 1) {
                box = boxes[i];
                debugger;
            }
        }

        
    };
    
    colorPalet.drawColorBoxes();
});
