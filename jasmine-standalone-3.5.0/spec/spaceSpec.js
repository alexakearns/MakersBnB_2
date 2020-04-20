'use strict';

describe('Space', function() {
    var space;

    beforeEach(function(){
        space = new Space;
    })

    it('has a name', function(){
        expect(space.name).toEqual(name);
    });

    it('has a description', function() {
        expect(space.description).toEqual(description);
    })

})