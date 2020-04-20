describe('Renter', function(){
    var renter;
    beforeEach(function(){
         renter = new Renter()
    });

    it ('The user enters their name', function() {
        renter.addName ("James Lewis")
        expect (renter.name).toEqual ("James Lewis")
    }); 

    it ('The user enters a DOB', function() {
        renter.addDob ("22/03/1993")
        expect (renter.dob).toEqual ("22/03/1993")
    }); 

})