describe('Booking', function() {
  var booking 

  function Space() {
  }
  let space

  beforeEach(function() {
    booking = new Booking('startdate', 'enddate')
    space = new Space
  })

  it('it has a reference', function() {
    expect(booking.reference).toEqual('reference')
  })



  it('has a Space', function() {
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

