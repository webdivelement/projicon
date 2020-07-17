/**
 * @module projicon
 * @overview projicon - A tool to generate text-based icons for projects.
 * @author webdivelement (https://github.com/webdivelement)
 */
(function() {

  "use strict";

  /**
   * Shorthand method to query an element in the DOM.
   * @param {string} selector - The DOM selector to query.
   * @memberof projicon
   */
  const dom = (selector) => document.querySelector(selector);

  /**
   * Object to reference DOM elements in the UI.
   * @namespace
   * @property {HTMLElement} main - The main sectioning element.
   * @property {HTMLElement} form - The form element containing the options.
   * @property {object} icon - An object of icon option related elements.
   * @property {HTMLInputElement} icon.text - The icon text input field.
   * @property {HTMLInputElement} icon.color - The icon colour input field.
   * @property {HTMLInputElement} icon.size - The icon size numeric input field.
   * @property {HTMLButtonElement} download - The download button in the form.
   * @property {HTMLCanvasElement} canvas - The icon preview canvas element.
   * @memberof projicon
   */
  const ui = {
    main: dom(".main"),
    form: dom(".form"),
    icon: {
      text: dom("input[name='text']"),
      color: dom("input[name='color']"),
      size: dom("input[name='size']"),
    },
    download: dom(".button-download"),
    canvas: dom(".canvas"),
  };

  /**
   * Object to reference the current options.
   * @namespace
   * @property {string} [text=*] - The icon text value.
   * @property {string} [color=#175798] - The icon background hex colour value.
   * @property {number} [size=512] - The icon image size value, in pixels.
   * @property {string} [font=Arial Black] - The icon text font family.
   * @property {string} [type=image/png] - The icon image file type.
   * @memberof projicon
   */
  const options = {
    text: "PR",
    color: "#175798",
    size: 512,
    font: "Arial",
    type: "image/png",
  };

  /**
   * Object to handle overall logic and supporting methods.
   * @namespace
   * @memberof projicon
   */
  const app = {

    /**
     * Method to handle application initialization and binding.
     */
    init: () => {

      ui.icon.text.value = options.text;
      ui.icon.text.addEventListener(
        "keyup",
        (event) => app.draw(event.target.value || " ")
      );

      ui.icon.color.value = options.color;
      ui.icon.color.addEventListener(
        "input",
        (event) => app.draw(null, event.target.value)
      );

      ui.icon.size.value = options.size;
      ui.icon.size.addEventListener(
        "input",
        (event) => app.draw(null, null, event.target.value)
      );

      ui.download.addEventListener("click", app.download);
      ui.form.addEventListener("submit", app.download);

      app.draw();

    },

    /**
     * Method to handle drawing the icon to the canvas.
     * @param {string} [text] - The text for the icon.
     * @param {string} [color] - The background colour for the icon.
     * @param {number} [size] - The size in pixels for the icon image.
     */
    draw: (text, color, size) => {

      options.text = (text || options.text).toUpperCase() || " ";
      options.color = color || options.color || "#000";
      options.size = size || options.size || 512;

      let context = ui.canvas.getContext("2d");
      let offset = options.size / 2;

      ui.canvas.width = options.size;
      ui.canvas.height = options.size;

      context.fillStyle = options.color;
      context.rect(0, 0, options.size, options.size);
      context.fill();

      context.font = "bold " + offset + "px " + (options.font || "Arial");
      context.baseline = "middle";
      context.fillStyle = "#fff";

      let width = context.measureText(options.text).width;
      let x = (options.size - width) / 2;
      let y = (offset * 0.85) + ((options.size - offset) / 2);

      context.fillText(options.text, x, y);

    },

    /**
     * Method to handle generating the image asset and prompting the download.
     * @param {object} [event] - The click event object.
     */
    download: (event) => {

      if (event) {
        event.preventDefault();
      }

      let anchor = document.createElement("a");
      anchor.download = "projicon.png";
      anchor.href = ui.canvas.toDataURL(options.type);
      anchor.click();

    },

  };

  window.addEventListener("DOMContentLoaded", app.init);

})();
