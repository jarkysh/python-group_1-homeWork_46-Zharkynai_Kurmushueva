    //задание 3 массивы [1, 5, 12, 4, 3,]
//[2, 3, 4, 5, 6, 7, 8, 9, 10]
//[3, 10, 17]  найти седнее арифметическое значение

function ar() {
   var len = arguments.length;
   if (len == 0)
       return "X3"
   var sum = 0;
   for (var i = 0; i < len; i++){
       sum+= +arguments[i];
   }
   return sum/len;
}
document.writeln(ar(1, 5, 12, 4, 3));
document.writeln(ar(2, 3, 4, 5, 6, 7, 8, 9, 10));
document.writeln(ar(3, 10, 17));



