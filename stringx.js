import buildIn from './buildIn.js';

const stringx = {
	String: {
		test() {
			console.log("this is from String");
		},
	},
	toReStr(re = false){
		let str = this.replace(/\\/g, '\\\\').replace(/([$\(\)*+\.?\[\]^])/g, '\\$1');
		if (re) {
			return RegExp(str);
		} else {
			return str;
		}
	},
};

Object.defineProperty(stringx, 'buildIn', {value: buildIn(String.prototype)});

export default stringx;
export {stringx};
