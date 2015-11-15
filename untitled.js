function c(number) {
    number = number * 2;
}
function b(number) {
    number = number - 1;
}
function a(number) {
   return number + 4;
}
a(b(c(2)));