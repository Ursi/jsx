import arrayx from './arrayx.js'; export {arrayx};
import mathx from './mathx.js'; export {mathx};
import setx from './setx.js'; export {setx};
import stringx from './stringx.js'; export {stringx};
import buildIn from './buildIn.js';

const jsx = {
	SelfGenerator(gf) {
		let genHolder = new Function;
		function sg(...params) {
			let gen = gf.apply(this, params);
			genHolder.gen = gen;
			return gen;
		}

		Object.setPrototypeOf(sg, new Proxy(genHolder, {
			get(target, prop) {
				const {gen} = target;
				if (gen && prop in gen) {
					if (gen[prop] instanceof Function) {
						return gen[prop].bind(gen);
					} else {
						return gen[prop];
					}
				} else {
					return genHolder[prop]; //sg needs genHolder's properties because it no longer has Function.prototype as its prototype
				}
			},
		}));

		return sg;
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
