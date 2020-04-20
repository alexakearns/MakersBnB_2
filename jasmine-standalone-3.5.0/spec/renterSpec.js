describe('Renter', function(){
    var renter;
    beforeEach(function(){
         renter = new Renter()
    });

    it ('The user enters their name', function() {
        renter.addName ("James Lewis")
        expect (renter.name).toEqual ("James Lewis")
    }); 

})