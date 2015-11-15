function c(number) {
   return number * 2;
}
function b(number) {
   return number - 1;
}
function a(number) {
   return number + 4;
}
a(b(c(2)));



or


function a(x) {
	x = b() + 2;
	return x;
}
function b(x) {
	x = c() - 1;
	return x;
}
function c(x) {
	x = x * 2;
	return x;
}
a(b(c(2)))