const expect = require('chai').expect;
const request = require('request');

//G

// function isValid(min, max, num) {
//   return (num >= min && num < max);
// };
describe('Random', () => {
  it('Returns a random number between 0 and 1023', (done) => {
      request.get('http://localhost:3000/api/random' , (err, res, body) => {
        //expect(isValid(0, 1024, JSON.parse(body).number)).to.equal(true);
        expect(JSON.parse(body).number).to.be.within(0, 1023);
        expect('Content-Type', /json/);
        expect(200);
        done();
      });
  });
});

describe('Custom Random', () => {
  it('Returns a random number between 0 and num', (done) => {
    var num = 2;
    request.get('http://localhost:3000/api/custom_random/' + num, (err, res, body) => {
      //expect(isValid(0, num, JSON.parse(body).number)).to.equal(true);
      expect(JSON.parse(body).number).to.be.within(0, num);
      expect('Content-Type', /json/);
      expect(200);
      done();
    });
  });
});

describe('Add', () => {
  it('Returns a message: added 1 to counter', (done) => {
    request.get('http://localhost:3000/api/counter/add', (err, res, body) => {
      expect(JSON.parse(body).message).to.equal('added 1 to counter');
      expect('Content-Type', /json/);
      expect(200);
      done();
    });
  });
});

describe('Get', () => {
  it('Returns a number', (done) => {
    request.get('http://localhost:3000/api/counter/get', (err, res, body) => {
      expect(JSON.parse(body).currentAmount).to.be.a('number');
      expect('Content-Type', /json/);
      expect(200);
      done();
    });
  });
});

describe('Vowels', () => {
  it('Returns the amount of vowels in word', (done) => {
    var word = 'aeiouyåäö'
    request.post('http://localhost:3000/api/counter/vowels?word=' + word, (err, res, body) => {
      expect(JSON.parse(body).amountOfVowels).to.equal(9);
      expect('Content-Type', /json/);
      expect(200);
      done();
    });
  });
});

//VG

describe('Adding', () => {
  it('Adding two values will return the sum', (done) => {
    var term1 = 1;
    var term2 = 2;
    // `http://localhost:3000/api/counter/adding?term1=${term1}&term2=${term2}`
    request.post('http://localhost:3000/api/counter/adding?term1=' + term1 + '&term2=' + term2, (err, res, body) => {
      expect(JSON.parse(body).sum).to.equal(3);
      expect('Content-Type', /json/);
      expect(200);
      done();
    });
  });
});

describe('Subtracting', () => {
  it('Subtracting two values will return the difference', (done) => {
    var term1 = 3;
    var term2 = 2;
    request.post('http://localhost:3000/api/counter/subtracting?term1=' + term1 + '&term2=' + term2, (err, res, body) => {
      expect(JSON.parse(body).difference).to.equal(1);
      expect('Content-Type', /json/);
      expect(200);
      done();
      });
  });

});

describe('Greeting', () => {
  it('Returns a greeting message', (done) => {
    request.get('http://localhost:3000/api/greetings', (err, res, body) => {
      expect(JSON.parse(body).message).to.equal('Have a great summer!');
      expect('Content-Type', /json/);
      expect(200);
      done();
    });
  });
});
