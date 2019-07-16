import buildIn from './buildIn.js';

const mathx = {
	randInt(lower, upper) {
		if (upper) {
			return lower + Math.floor(Math.random() * (upper - lower + 1));
		} else {
			return Math.randInt(0, lower - 1);
		}
	},
}

Object.defineProperty(mathx, 'buildIn', {value: buildIn(Math, true)});

export default mathx;
export {mathx};
