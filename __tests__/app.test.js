const {addNumbers} = require('../app.js');

describe('addNumbers', () => {
  
  it('Answer: 5', () => {
    const result = addNumbers(2, 3);
    expect(result).toBe(5); 
  });

  it('Answer: -1', () => {
    const result = addNumbers(-2, 1);
    expect(result).toBe(-1);
  });
});
