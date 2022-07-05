// encodeURI()
console.log(encodeURI("http://domain.com?x=A"));
console.log(encodeURI("http://domain.com?x=가"));

// decodeURI()
const encoded = encodeURI("http://domain.com?x=가");
console.log(decodeURI(encoded));
