const objectx = {
    getPath(path) {
        let value = this;
		for (let pathPart of path) {
		    value = value[pathPart];
		}

		return value;
    },
};

import buildIn from './buildIn.js';
Object.defineProperty(objectx, 'buildIn', {value: buildIn(Object.prototype)});

export default objectx;
export {objectx};
