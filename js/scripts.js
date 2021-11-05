function Pizza(toppings, size,price){
  this.top = top;
  this.size = size;
  this.price = price
}
Pizza.prototype.modifyCost = function(){
  if (this.top ===){
    this.price += 1;
  } else{
    this.price;
  }
}
function pizzatopandsize(pizza) {
  $("#pizza-price").show();
  $(".top").html(pizza.top);
  $(".size").html(pizza.size);
  $(".cost").html(pizza.cost);
}
$(document).ready(function(){
  $("form#pizza-select").submit(function(event){
    event.preventDefault();
    let pizzaTop = $("input:radio[name=top]:checked").val();
    let pizzaSize =$("input:radio[name=size]:checked").val();
    $("input:radio[name=top]:checked").val("");
    $("input:radio[name=size]:checked").val("");
    let pizzaCost = new Pizza(pizzaTop, pizzaSize);
    pizzaCost.modifyCost();
    showTopAndSize(pizzaCost);
    $("#pizza-select").hide();
  });
});