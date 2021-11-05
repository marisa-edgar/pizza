function Pizza(toppings, size,price){
  this.top1 = top1;
  this.top2 = top2;
  this.top3 = top3;
  this.top4 = top4;
  this.top5 = top5;
  this.size = size;
  this.price = price
}
Pizza.prototype.modifyCost = function(){
  if (this.top1 === "onion"){
    this.price += 1;
  } else{
    this.price;
  }
  if (this.top1 === "mushroom"){
    this.price += 1;
  } else{
    this.price;
  }
  if (this.top1 === "black olive"){
    this.price += 1;
  } else{
    this.price;
  }
  if (this.top1 === "bell pepper"){
    this.price += 1;
  } else{
    this.price;
  }
  if (this.top1 === "jalapeno"){
    this.price += 1;
  } else{
    this.price;
  }
  // next topping
  if (this.top1 === "onion"){
    this.price += 1;
  } else{
    this.price;
  }
  if (this.top1 === "mushroom"){
    this.price += 1;
  } else{
    this.price;
  }
  if (this.top1 === "black olive"){
    this.price += 1;
  } else{
    this.price;
  }
  if (this.top1 === "bell pepper"){
    this.price += 1;
  } else{
    this.price;
  }
  if (this.top1 === "jalapeno"){
    this.price += 1;
  } else{
    this.price;
  }
  // next topping
  if (this.top1 === "onion"){
    this.price += 1;
  } else{
    this.price;
  }
  if (this.top1 === "mushroom"){
    this.price += 1;
  } else{
    this.price;
  }
  if (this.top1 === "black olive"){
    this.price += 1;
  } else{
    this.price;
  }
  if (this.top1 === "bell pepper"){
    this.price += 1;
  } else{
    this.price;
  }
  if (this.top1 === "jalapeno"){
    this.price += 1;
  } else{
    this.price;
  }
  // next topping
  if (this.top1 === "onion"){
    this.price += 1;
  } else{
    this.price;
  }
  if (this.top1 === "mushroom"){
    this.price += 1;
  } else{
    this.price;
  }
  if (this.top1 === "black olive"){
    this.price += 1;
  } else{
    this.price;
  }
  if (this.top1 === "bell pepper"){
    this.price += 1;
  } else{
    this.price;
  }
  if (this.top1 === "jalapeno"){
    this.price += 1;
  } else{
    this.price;
  }
  // next topping
  if (this.top1 === "onion"){
    this.price += 1;
  } else{
    this.price;
  }
  if (this.top1 === "mushroom"){
    this.price += 1;
  } else{
    this.price;
  }
  if (this.top1 === "black olive"){
    this.price += 1;
  } else{
    this.price;
  }
  if (this.top1 === "bell pepper"){
    this.price += 1;
  } else{
    this.price;
  }
  if (this.top1 === "jalapeno"){
    this.price += 1;
  } else{
    this.price;
  }
};
function pizzatopandsize(pizza) {
  $("#pizza-price").show();
  $(".top").html(pizza.top);
  $(".size").html(pizza.size);
  $(".cost").html(pizza.cost);
};
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