import buildIn from './buildIn.js';

const stringx = {
	String: {
		ii(literals, ...params) {
			let str = '';
			for (var i = 0; i < params.length; i++) {
				let literal = literals[i].match(/(?<rest>.*?)(?<tabs>\t*)$/s).groups;
				str += literal.rest;
				str += params[i].split('\n').map(line => literal.tabs + line).join('\n');
			}

			str += literals[i];
			function leadingTabs(str) {
				return str.match(/^\t*/)[0].length;
			}

			let
				lines = str.split('\n'),
				addedIndent = Number(lines[0][0]) || 0,
				baseIndent = leadingTabs(lines[1]);

			return lines.slice(1, -1)
				.map(line => {
					let tabNum = Math.max(leadingTabs(line) - baseIndent + addedIndent, 0);
					return '\t'.repeat(tabNum) + line.replace(/^\t*/, '');
				}).join('\n');
		}
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
