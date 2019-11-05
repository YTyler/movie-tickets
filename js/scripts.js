

function Ticket(name, time, age, price = 5.00){
  this.name = name;
  this.time = time;
  this.age = age;
  this.price = price;
  this.calcPrice();
}

Ticket.prototype.calcPrice = function() {
  if (this.age >= 65) {
    this.price -= 3.00;
    return true;
  } else if (this.time < 16.00){
    this.price -= 2.00;
    return true;
  }
};

Ticket.prototype.displayTicket = function (){

  $('.total').html(` You are seeing: ${this.name} <br> At : ${this.time}:00  <br> Your final price is: ${this.price}`)


};


var ticket1 = new Ticket('Tyler',4, 12);

// console.log(ticket1.calcPrice());
// console.log(ticket1);
// console.log(ticket1);

// console.log(Date.parse(Date.now()));

$(document).ready(function(){
  $("form").submit(function(event){

  event.preventDefault();

  var time = $("select[name=showTimes]").val();
  var ageInput = $("#age").val();
  var movie = $("input[name='movies']:checked").val();

  var newTicket = new Ticket(movie, time, ageInput);
  newTicket.displayTicket();
  console.log(newTicket);

});
});
