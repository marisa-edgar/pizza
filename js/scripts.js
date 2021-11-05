function Pizza(toppings, size,price){
  this.top1 = top1;
  this.top2 = top2;
  this.top3 = top3;
  this.top4 = top4;
  this.top5 = top5;
  this.size = size;
  this.price = 10;
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
  // next topping 2
  if (this.top2 === "onion"){
    this.price += 1;
  } else{
    this.price;
  }
  if (this.top2 === "mushroom"){
    this.price += 1;
  } else{
    this.price;
  }
  if (this.top2 === "black olive"){
    this.price += 1;
  } else{
    this.price;
  }
  if (this.top2 === "bell pepper"){
    this.price += 1;
  } else{
    this.price;
  }
  if (this.top2 === "jalapeno"){
    this.price += 1;
  } else{
    this.price;
  }
  // next topping 3
  if (this.top3 === "onion"){
    this.price += 1;
  } else{
    this.price;
  }
  if (this.top3 === "mushroom"){
    this.price += 1;
  } else{
    this.price;
  }
  if (this.top3 === "black olive"){
    this.price += 1;
  } else{
    this.price;
  }
  if (this.top3 === "bell pepper"){
    this.price += 1;
  } else{
    this.price;
  }
  if (this.top3 === "jalapeno"){
    this.price += 1;
  } else{
    this.price;
  }
  // next topping 4
  if (this.top4 === "onion"){
    this.price += 1;
  } else{
    this.price;
  }
  if (this.top4 === "mushroom"){
    this.price += 1;
  } else{
    this.price;
  }
  if (this.top4 === "black olive"){
    this.price += 1;
  } else{
    this.price;
  }
  if (this.top4 === "bell pepper"){
    this.price += 1;
  } else{
    this.price;
  }
  if (this.top4 === "jalapeno"){
    this.price += 1;
  } else{
    this.price;
  }
  // next topping 5
  if (this.top5 === "onion"){
    this.price += 1;
  } else{
    this.price;
  }
  if (this.top5 === "mushroom"){
    this.price += 1;
  } else{
    this.price;
  }
  if (this.top5 === "black olive"){
    this.price += 1;
  } else{
    this.price;
  }
  if (this.top5 === "bell pepper"){
    this.price += 1;
  } else{
    this.price;
  }
  if (this.top5 === "jalapeno"){
    this.price += 1;
  } else{
    this.price;
  }
};
function pizzaTopAndSize(pizza) {
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