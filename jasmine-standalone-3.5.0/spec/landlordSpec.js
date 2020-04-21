describe('Landlord', function() {

  function Space() {
  }
  let landlord;
  let space;

  beforeEach(function() {
    landlord = new Landlord("Tom");
    space = new Space();
  })


  it ( "Can list a space", function() {
    landlord.listSpace(space)
    expect(landlord.spaces[0]).toBeInstanceOf(Space)
  })

  it ("has username", function() {
    expect(landlord.username).toEqual("Tom")
  })

  it ("can have a different username", function() {
    let landlord2 = new Landlord("Sam")
    expect(landlord2.username).toEqual("Sam")
  })

})