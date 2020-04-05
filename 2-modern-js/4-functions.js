const X = function () {
  // "this" here is the caller of X
};

const Y = () => {
  // "this" here is NOT the caller of Y

  // It's the same "this" found in Y's scope
};

// Arrow function doesn't care who calls it = works for clousures, delayed executions
// A regular value this.