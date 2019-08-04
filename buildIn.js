export default (obj) => {
	return function(){
		for (let [name, descriptor] of Object.entries(Object.getOwnPropertyDescriptors(this))) {
			let newDescriptor = descriptor;
			if (!('get' in descriptor)) {
				newDescriptor.value = this[name];
			}

			Object.defineProperty(obj, name, newDescriptor);
		}
	}
}
