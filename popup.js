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
            var inputs, i, input, boxes, buttons;
            inputs = document.getElementsByClassName('color-input');
            for (i = 0; i < inputs.length; i += 1) {
                input = inputs[i];
                input.value = "FFFFFF";
                this.bindInputChange(input);
            }

            boxes = document.getElementsByClassName('color-box');
            for (i = 0; i < boxes.length; i += 1) {
                this.bindBoxClick(boxes[i]);
            }

            buttons = document.getElementsByClassName('js-close-button');

            for (i = 0; i < buttons.length; i += 1) {
                this.bindCloseButtonClick(buttons[i]);
            }
        },

        bindCloseButtonClick: function (button) {
            button.onclick = function (e) {
                e.stopPropagation();
                var options = this.parentElement;
                options.className = options.className + " hidden";
            };
        },

        bindInputChange: function (input) {
            input.onkeyup = function () {
                var box = this.parentElement.parentElement;
                box.style.backgroundColor = "#" + this.value;
            };
        },

        bindBoxClick: function (box) {
            box.onclick = function () {
                var options = this.children[0];
                if (options.className.indexOf('hidden') >= 0) {
                    options.className = options.className.replace(/\bhidden\b/, '');
                }
            };
        }
    };
    
    colorPalet.drawColorBoxes();
});
