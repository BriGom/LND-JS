
/* Our task will be to create a list of contacts. 
Initially, the list will be quite simple: we will only write three people to it using the data shown in the table below. 
In the rest of the course, you will return to this script and systematically extend it with new functionality, using the newly learned elements of JavaScript.
Declare and initialize the variables where you will store all the information (nine variables in total).
Display in the console information about the first and last contact in the form: name/phone/email.*/

const contacts = [{
  name: "Maxwell Wright",
  phone: "(0191) 719 6495",
  email: "curabitur.egestas.nunc@nonummyac.co.uk"
}, {
  name: "Raja Villareal",
  phone: "0866 398 2895",
  email: "posuere.vulputate@sed.com"
    
},{
  name: "Helen Richards",
  phone: "0800 1111",
  email: "libero@convallis.edu"
}];
console.log(contacts[0].name, contacts[0].phone, contacts[0].email);
console.log(contacts[1].name, contacts[1].phone, contacts[1].email);
console.log(contacts[2].name, contacts[2].phone, contacts[2].email);