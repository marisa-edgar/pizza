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
  }else if (this.size === "xl") {
    this.price += 5;
  }else {
    this.price;
  }

  //topping 1 
  if (this.top1 === "Onion") {
    this.price += 1;
  }
   if (this.top2 === "Mushroom") {
    this.price += 1;
  }
   if (this.top3 === "Black Olive") {
    this.price += 1;
  }
   if (this.top4 === "Bell Pepper") {
    this.price += 1;
  }
   if (this.top5 === "Jalapeno") {
    this.price += 1;
  }
  
};

function showTopAndSize(pizza1) {
  $("#pizza-price").show();
  $(".pizza-size").html(pizza1.size);
  $(".topping1").html(pizza1.top1);
  $(".topping2").html(pizza1.top2);
  $(".topping3").html(pizza1.top3);
  $(".topping4").html(pizza1.top4);
  $(".topping5").html(pizza1.top5);
  $(".cost").html(pizza1.price);
}
$(document).ready(function(){
  $("form#pizza-select").submit(function(event) {
    event.preventDefault();
    let pizzaSize =$("input:radio[name=size]:checked").val();
    let pizzaTop1 = $("input:checkbox[name=topping1]:checked").val();
    let pizzaTop2 = $("input:checkbox[name=topping2]:checked").val();
    let pizzaTop3 = $("input:checkbox[name=topping3]:checked").val();
    let pizzaTop4 = $("input:checkbox[name=topping4]:checked").val();
    let pizzaTop5 = $("input:checkbox[name=topping5]:checked").val();
    console.log(pizzaTop1,pizzaTop2,pizzaTop3,pizzaTop4,pizzaTop5)
    let pizza1 = new Pizza(pizzaSize,pizzaTop1, pizzaTop2, pizzaTop3, pizzaTop4, pizzaTop5);
    pizza1.modifyCost();
    showTopAndSize(pizza1);
    $("#pizza-select").hide();
  });
});