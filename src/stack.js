// Note: don't use javascript's native array functions to do this.
var makeStack = function(){
  var stack = {
    length: 0,
    add: function(value) {

      stack.length += 1;

      stack.inventory[stack.length] = value;

    },

    remove: function() {

      stack.inventory[stack.length] = undefined;
      stack.length -= 1;
      
    },

    inventory: {}

  };
  return stack;
}
