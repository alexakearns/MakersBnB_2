describe('Booking', function() {
  var Booking = require('../../lib/jasmine_examples/booking')
  var booking 

  function Space() {
  }
  let space

  beforeEach(function() {
    booking = new Booking('startdate', 'enddate')
    space = new Space
  })

  it('it has a reference', function() {
    booking.reference = 'G3NRSFGPQEXFDCNE8J7U'
    expect(booking.reference).toEqual('G3NRSFGPQEXFDCNE8J7U')
  })



  it('has a instance of the Space class', function() {
    expect(booking.setSpace(space)).toBeInstanceOf(Space)
  }) 

  it('has a Space', function(){
    booking.setSpace(space)
    expect(booking.space).toEqual(space)
  })

  it('has a startdate', function() {
    expect(booking.startDate).toEqual('startdate')
  })

  it('has a end date', function() {
    expect(booking.endDate).toEqual('enddate')
  })
})

