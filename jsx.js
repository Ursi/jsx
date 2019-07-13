import arrayx from './arrayx.js'; export {arrayx};
import mathx from './mathx.js'; export {mathx};
import setx from './setx.js'; export {setx};
import stringx from './stringx.js'; export {stringx};
import buildIn from './buildIn.js';


const jsx = {
	transWait(elem) {
	    return new Promise(resolve => {
	        elem.addEventListener('transitionend', function f() {
	            elem.removeEventListener('transitionend', f);
	            resolve();
	        });
	    })
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
