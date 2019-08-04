import arrayx from './arrayx.js'; export {arrayx};
import mathx from './mathx.js'; export {mathx};
import setx from './setx.js'; export {setx};
import stringx from './stringx.js'; export {stringx};
import buildIn from './buildIn.js';

const jsx = {
	ii(literals, ...params) {
		let str = '';
		for (var i = 0; i < params.length; i++) {
			let literal = literals[i].match(/(?<rest>.*?)(?<tabs>\t*)$/s).groups;
			str += literal.rest
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
};

Object.defineProperties(jsx, {
	buildIn: {
		value: function(){
			buildIn(globalThis).call(jsx);
			for (let submodule of Object.values(this.submodules)) {
				submodule.buildIn();
			}
		},
	},
	submodules: {
		value: {
			arrayx: arrayx,
			mathx: mathx,
			setx: setx,
			stringx: stringx,
		},
	},
});

export default jsx;
