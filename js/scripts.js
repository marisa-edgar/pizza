function Pizza(size, top1, top2, top3, top4, top5){
  this.price = 10;
  this.size = size;
  this.top1 = top1;
  this.top2 = top2;
  this.top3 = top3;
  this.top4 = top4;
  this.top5 = top5;
}
Pizza.prototype.modifyCost = function() {
  if (this.size === "large") {
    this.price += 2;
  }else if(this.size === "XL") {
    this.price += 5;
  }else {
    this.price;
  }
  if (this.top1 === "onion") {
    this.price += 1;
  } else{
    this.price;
  }
  if (this.top1 === "mushroom") {
    this.price += 1;
  } else{
    this.price;
  }
  if (this.top1 === "black olive") {
    this.price += 1;
  } else{
    this.price;
  }
  if (this.top1 === "bell pepper") {
    this.price += 1;
  } else{
    this.price;
  }
  if (this.top1 === "jalapeno") {
    this.price += 1;
  } else{
    this.price;
  }
  // next topping 2
  if (this.top2 === "onion") {
    this.price += 1;
  } else{
    this.price;
  }
  if (this.top2 === "mushroom") {
    this.price += 1;
  } else{
    this.price;
  }
  if (this.top2 === "black olive") {
    this.price += 1;
  } else{
    this.price;
  }
  if (this.top2 === "bell pepper") {
    this.price += 1;
  } else{
    this.price;
  }
  if (this.top2 === "jalapeno") {
    this.price += 1;
  } else{
    this.price;
  }
  // next topping 3
  if (this.top3 === "onion") {
    this.price += 1;
  } else{
    this.price;
  }
  if (this.top3 === "mushroom") {
    this.price += 1;
  } else{
    this.price;
  }
  if (this.top3 === "black olive") {
    this.price += 1;
  } else{
    this.price;
  }
  if (this.top3 === "bell pepper") {
    this.price += 1;
  } else{
    this.price;
  }
  if (this.top3 === "jalapeno") {
    this.price += 1;
  } else{
    this.price;
  }
  // next topping 4
  if (this.top4 === "onion") {
    this.price += 1;
  } else{
    this.price;
  }
  if (this.top4 === "mushroom") {
    this.price += 1;
  } else{
    this.price;
  }
  if (this.top4 === "black olive") {
    this.price += 1;
  } else{
    this.price;
  }
  if (this.top4 === "bell pepper") {
    this.price += 1;
  } else{
    this.price;
  }
  if (this.top4 === "jalapeno") {
    this.price += 1;
  } else{
    this.price;
  }
  // next topping 5
  if (this.top5 === "onion") {
    this.price += 1;
  } else{
    this.price;
  }
  if (this.top5 === "mushroom") {
    this.price += 1;
  } else{
    this.price;
  }
  if (this.top5 === "black olive") {
    this.price += 1;
  } else{
    this.price;
  }
  if (this.top5 === "bell pepper") {
    this.price += 1;
  } else{
    this.price;
  }
  if (this.top5 === "jalapeno") {
    this.price += 1;
  } else{
    this.price;
  }
};
console.log(Pizza.price)
function showTopAndSize(pizza) {
  $("#pizza-price").show();
  $(".pizza-size").html(pizza.size);
  $(".topping1").html(pizza.top1);
  $(".topping2").html(pizza.top2);
  $(".topping3").html(pizza.top3);
  $(".topping4").html(pizza.top4);
  $(".topping5").html(pizza.top5);
  $(".cost").html(pizza.price);
}
$(document).ready(function(){
  $("form#pizza-select").submit(function(event) {
    event.preventDefault();
    let pizzaSize =$("input:radio[name=size]:checked").val();
    let pizzaTop1 = $("input:radio[name=top1]:checked").val();
    let pizzaTop2 = $("input:radio[name=top2]:checked").val();
    let pizzaTop3 = $("input:radio[name=top3]:checked").val();
    let pizzaTop4 = $("input:radio[name=top4]:checked").val();
    let pizzaTop5 = $("input:radio[name=top5]:checked").val();
    $("input:radio[name=size]:checked").val("");
    $("input:radio[name=topping1]:checked").val("");
    $("input:radio[name=topping2]:checked").val("");
    $("input:radio[name=topping3]:checked").val("");
    $("input:radio[name=topping4]:checked").val("");
    $("input:radio[name=topping5]:checked").val("");
    let pizza = new Pizza(pizzaSize,pizzaTop1, pizzaTop2, pizzaTop3, pizzaTop4, pizzaTop5);
    pizza.modifyCost();
    showTopAndSize(pizza);
    $("#pizza-select").hide();
  });
});