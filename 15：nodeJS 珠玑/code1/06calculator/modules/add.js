define(function(require,exports,module) {
 var add=function(v1,v2){

   return v1+v2;
 }
 $=require('./jquery.js');
  var add2=function(){
      var v1= $('#v1').val();
      var v2= $('#v2').val();
   return (v1-0)+(v2-0);
 }
 
 
 
 
exports.add=add;
exports.add2=add2;
});