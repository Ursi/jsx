import buildIn from './buildIn.js';

const objectx = {
	getPath(path) {
		let value = this;
		for (let pathPart of path) {
			value = value[pathPart];
		}

		return value;
	},
};

Object.defineProperty(objectx, 'buildIn', {value: buildIn(Object.prototype)});

export default objectx;
export {objectx};
