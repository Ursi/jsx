export default function(obj) {
	return function buildIn(to = obj){
		for (let [name, descriptor] of Object.entries(Object.getOwnPropertyDescriptors(this))) {
			if (['Array', 'Object', 'Set', 'String'].includes(name)) {
				buildIn.call(this[name], globalThis[name]);
			} else {
				let newDescriptor = descriptor;
				if (!('get' in descriptor)) {
					newDescriptor.value = this[name];
				}

				Object.defineProperty(to, name, newDescriptor);
			}
		}
	}
}
