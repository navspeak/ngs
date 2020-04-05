// "this" here is "exports"

this.id = 'exports';
this.func1 = function() {console.log("hhhh")};

const testerObj = {
  func1: function () {
    // has this of testerObj which has two funcs viz func1 and func2
    console.log('func1', this);
  },

  func2: () => {
     console.log('func2', this);
  },
};

this.func1();
testerObj.func1();
testerObj.func2();
/*
output:
func1 { func1: [Function: func1], func2: [Function: func2] }
func2 { id: 'exports' }
 */