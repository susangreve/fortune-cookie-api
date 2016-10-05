var assert = require('assert');

var routes = require('../routes/index');


describe('fortuneApi', function() {

    it('should be a unit test', function() {

		var onePlusOne = 1 + 1;
		var two = 2;


		console.log("did it work?");
		assert.equal(onePlusOne, two);

    });


	it('should give a random fortune', function() {
		var unique = {};

		for(var i=0;i<10;i++) {
			var key = global.getFortune();

			console.log("got fortune ", key);

			if (unique[key]) {
				assert.fail("duplicate fortune!");
				break;
			}

			unique[key] = true;
		}

		assert.ok(true);
	});

});
