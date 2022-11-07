/**
 * @author  []
 * @copyright Crown Copyright 2022
 * @license Apache-2.0
 */

import Operation from "../Operation.mjs";

/**
 * Convert to sarcasm operation
 */
class ConvertToSarcasm extends Operation {

    /**
     * ConvertToSarcasm constructor
     */
    constructor() {
        super();

        this.name = "Convert to sarcasm";
        this.module = "Other";
        this.description = "Converts strings (primarily English) to sarcastic output";
        this.infoURL = "";
        this.inputType = "string";
        this.outputType = "string";
        this.args = [];
    }

    /**
     * @param {string} input
     * @param {Object[]} args
     * @returns {string}
     */
    run(input, args) {
    let inputArray = Array.from(input);
    inputArray.forEach(function callback(v, i) {
        if (i%2) {
            inputArray[i] = v.toUpperCase();
        } else {
            inputArray[i] = v.toLowerCase();
        }
        });
        return inputArray.join("");
    }

}

export default ConvertToSarcasm;
