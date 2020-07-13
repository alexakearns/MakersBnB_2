describe("Renter", function () {
  var renter;
  beforeEach(function () {
    renter = new Renter();
  });

  it("The user enters their name", function () {
    renter.addName("James Lewis");
    expect(renter.name).toEqual("James Lewis");
  });

  it("The user enters a DOB", function () {
    renter.addDob("22/03/1993");
    expect(renter.dob).toEqual("22/03/1993");
  });

  it("checks to see if the dob is valid", function () {
    expect(renter.isValidDate("ds/03/1991")).toEqual(false);
    expect(renter.isValidDate("02/03/1991")).toEqual(true);
  });

  it("checks users gender choice", function () {
    renter.addGender("Male");
    expect(renter.gender).toEqual("Male");
  });
});
