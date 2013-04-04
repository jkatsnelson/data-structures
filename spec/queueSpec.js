

describe("queue", function() {
  var queue;

  beforeEach(function() {
    queue = makeQueue();
  });

  it("should have a method named 'add'", function() {
    expect(queue.add).toEqual(jasmine.any(Function));
  });

  // add more tests here to test the functionality of queue
  it("should have a method named 'remove'", function(){
    expect(queue.add).toEqual(jasmine.any(Function));
  });

  it("should have a method named 'length'", function(){
    expect(queue.add).toEqual(jasmine.any(Function));
  });

  describe('the inventory', function () {

    beforeEach(function(){
      queue.add(19);
    });

    it("should have key value pairs", function(){

      expect(queue.inventory["1"]).toEqual(19);

    })

  });

  describe('the add method', function(){

    it("should add value to the inventory", function(){

      expect(queue.add(6)).toEqual(queue.inventory["1"]);

    });


    it("should store the values in queue with sequential keys", function(){
      
      expect(queue.add(10)).toEqual(queue.inventory["1"]);
      expect(queue.add(20)).toEqual(queue.inventory["2"]);

    });

    it("should increase the length of the queue by one", function(){
    
      expect(queue.add(1)).toEqual(queue.length);
    
    });
  });

  describe('the remove method', function(){

    beforeEach(function() {
      queue.add(10);
      queue.add(30);
      queue.add(40);
      queue.remove()
    });

    it("should decrease the length by 1", function() {

      expect(queue.length).toEqual(2);

    });

    it("should remove first item in queue and move everything up", function(){

      expect(queue.inventory).toEqual({1: 30});

    });

  })
});

// describe("Included matchers:", function() {

//   it("The 'toBe' matcher compares with ===", function() {
//     var a = 12;
//     var b = a;

//     expect(a).toBe(b);
//     expect(a).not.toBe(null);
//   });