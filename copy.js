var obj = { 
	a : { b : 10 },
	c: 20
};

// 浅拷贝
function shallowCopy (obj) {
	var newObj = {};
	for(var attr in obj){
		newObj[attr] = obj[arr];
	}
	return newObj;
}
var obj2 = shallowCopy(obj);

// 深拷贝
function deepCopy (obj) {
	if(typeof obj != 'object'){
		// console.trace();
		return obj;
	}
	var newObj = {};
	for(var attr in obj){
		newObj[attr] = deepCopy(obj[attr]);
	}
	return newObj;
}
var obj3 = deepCopy(obj);