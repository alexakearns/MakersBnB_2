describe('Booking', function() {
  var booking 

  beforeEach(function() {
    booking = new Booking()
  })

  it('it has a reference', function() {
    expect(booking.reference).toEqual('reference')
  })

})
