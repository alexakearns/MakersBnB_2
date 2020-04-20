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
