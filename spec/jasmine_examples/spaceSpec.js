'use strict';

describe('Space', function () {
    var Space = require('../../lib/jasmine_examples/space')
    var space;
    beforeEach(function() {
        space = new Space('The Attic', 'The super creepy, bat infested attic', 21, 'Mon Oct 13 2014', 'Tue Oct 14 2014');
    })

    describe('.name adds a name', function() {
        it('returns the spaces name', function() {
            expect(space.name).toBe('The Attic');
        })
    })
        describe('.description adds a description', function() {
            it('returns the description', function() {
                expect(space.description).toBe('The super creepy, bat infested attic');
            })
    
        })

        describe('.price adds daily price', function() {
            it('returns price per day', function() {
                expect(space.dailyPrice).toBe(21);
            })
        })

        describe('.availabilityfrom', function() {
            it('allows landlord to give dates when space is available', function() {
                expect(space.availabilityFrom).toBe('Mon Oct 13 2014');
            })
        })
    
        describe('.availabilityTo', function() {
            it('allows landlord to give dates when space is available', function() {
                expect(space.availabilityTo).toBe('Tue Oct 14 2014');
            })
        })
    })

/*
    describe('.addName adds a name', function() {
        it('returns the spaces name', function() {
            space.addName('The Shed')
            expect(space.name).toBe('The Shed');
        })
    })

    describe('.description adds a description', function() {
        it('returns the description', function() {
            space.addDescription('The fun shed at the bottom of the garden')
            expect(space.description).toBe('The fun shed at the bottom of the garden');
        })

    })

    describe('.price adds daily price', function() {
        it('returns price per day', function() {
            space.addDailyPrice(100);
            expect(space.dailyPrice).toBe(100);
        })
    })

    describe('.availabilityfrom', function() {
        it('allows landlord to give dates when space is available', function() {
            space.addAvailabilityFrom('October 13, 2014');
            expect(space.availabilityFrom).toBe('Mon Oct 13 2014');
        })
    })

    describe('.availabilityTo', function() {
        it('allows landlord to give dates when space is available', function() {
            space.addAvailabilityTo('October 14, 2014');
            expect(space.availabilityTo).toBe('Tue Oct 14 2014');
        })
    })

})
*/