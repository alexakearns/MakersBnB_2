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

describe('.availabilityfrom', function() {
    it('allows landlord to give dates when space is available', function() {
        let space = new Space();
        space.addAvailabilityFrom('October 13, 2014');
        expect(space.availabilityFrom).toBe('Mon Oct 13 2014');
    })
})

describe('.availabilityTo', function() {
    it('allows landlord to give dates when space is available', function() {
        let space = new Space();
        space.addAvailabilityTo('October 14, 2014');
        expect(space.availabilityTo).toBe('Tue Oct 14 2014');
    })
})