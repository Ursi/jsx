import buildIn from './buildIn.js';

const setx = {
	toArray() {
		let array = [];
		for (let entry of this.values()) {
			array.push(entry);
		}

		return array;
	},
};

Object.defineProperty(setx, 'buildIn', {value: buildIn(Set.prototype)});

export default setx;
export {setx};
