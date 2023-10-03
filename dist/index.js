"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mc = void 0;
const clsx_1 = require("clsx");
const tailwind_merge_1 = require("tailwind-merge");
function mc(...inputs) {
    return (0, tailwind_merge_1.twMerge)((0, clsx_1.clsx)(inputs));
}
exports.mc = mc;
