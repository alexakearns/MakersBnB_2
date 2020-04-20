'use strict';

describe('Space', function () {
    var space;
})

describe('.addName adds a name', function() {
    it('returns the spaces name', function() {
        let space = new Space();
        space.addName('The Attic');
        expect(space.name).toBe('The Attic');
    })
})

describe('.description adds a description', function() {
    it('returns the description', function() {
        let space = new Space();
        space.addDescription('my creepy attic');
        expect(space.description).toBe('my creepy attic');
    })

})

describe('.price adds daily price', function() {
    it('returns price per day', function() {
        let space = new Space();
        space.addDailyPrice(100);
        expect(space.dailyPrice).toBe(100);
    })
})

describe('.availability', function() {
    it('allows landlord to give dates when space is available', function() {
        let space = new Space();
        space.addAvailability('October 13, 2014');
        expect(space.availability).toBe('Mon Oct 13 2014');
    })
})