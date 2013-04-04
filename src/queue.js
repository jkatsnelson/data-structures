// Note: don't use javascript's native array functions to do this.
var makeQueue = function(){
  var queue = {
    
    length: 0,
    
    add: function (value) {
      

      queue.length = queue.length + 1;

      queue.inventory[queue.length] = value;

      return queue.inventory[queue.length];

    },

    remove: function(){

      queue.length = queue.length - 1;

      for (key in queue.inventory) {
        queue.inventory[key] = queue.inventory[parseInt(key)+1]
        delete queue.inventory[parseInt(key)+1]
      };

    },

    inventory: { 

    }

  };
  return queue;
}