describe("stack", function() {
  var stack;

  beforeEach(function() {
    stack = makeStack();
  });

  it("should have a method named 'add'", function() {
    expect(stack.add).toEqual(jasmine.any(Function));
  });


  describe('the add method', function(){
      
    beforeEach(function() {
      stack.add(6);
      stack.add(7);
    });

    it("should add value to the inventory", function(){

      expect(stack.inventory["1"]).toEqual(6);

    });


    it("should store the values in stack with sequential keys", function(){
      
      expect(stack.inventory["1"]).toEqual(6);
      expect(stack.inventory["2"]).toEqual(7);

    });

    it("should increase the length of the stack by one", function(){
    
      expect(stack.length).toEqual(2);
    
    });
  
  });

  describe('the remove function', function(){

    beforeEach(function() {
      stack.add(6);
      stack.add(7);
      stack.remove(6);
    });

    it('should decrease the length by one', function(){

      expect(stack.length).toEqual(1);

    });

    it('remove the last item in the inventory', function(){


      expect(stack.inventory).toEqual({1: 6})
    });

  });



  // add more tests here to test the functionality of queue
  it("should have a method named 'remove'", function(){
    expect(stack.add).toEqual(jasmine.any(Function));
  });

  it("should have a method named 'length'", function(){
    expect(stack.add).toEqual(jasmine.any(Function));
  });



  // add more tests here to test the functionality of stack
});