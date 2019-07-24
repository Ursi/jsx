import buildIn from './buildIn.js';

const stringx = {};

Object.defineProperty(stringx, 'buildIn', {value: buildIn(String.prototype)});

export default stringx;
export {stringx};
