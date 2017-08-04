import {Griddata} from './griddata';

describe('Griddata', () => {

  it('should create an instance', () => {
    expect(new Griddata()).toBeTruthy();
  });

  it('should accept values in constructor', () => {
    let gd = new Griddata({
      id:2,
      first_name:"Margarethe",
      last_name:"Keyse",
      email:"mkeyse1@bloglines.com",
      gender:"Female",
      ip_address:"167.148.20.98"
    });
    expect (gd.id).toEqual(2);
    expect (gd.ip_address).toEqual("167.148.20.98");
    expect (gd.first_name).toContain("Marg");
  });
});
