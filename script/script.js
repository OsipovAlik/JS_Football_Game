let arrowLeft = 37;
let arrowUp = 38;
let arrowDown = 40;
let arrowRight = 39;

let leftorRight = 660;
let upOrDown = 330;

let goalLeft = 60;
let goalRight = 1230;

$(".goal").hide();

function reload() {
   location.reload();
}

$("body").keydown(function(e){

   if(e.keyCode == arrowLeft){
      $(".ball").css("left", leftorRight);
      leftorRight -= 10;
      if(leftorRight == goalLeft && upOrDown == 330){
         $(".goal").show();
         setTimeout(reload,2000);
      }
   }
   
   
   if(e.keyCode == arrowRight){
      $(".ball").css("left", leftorRight);
      leftorRight += 10;
      if(leftorRight == goalRight && upOrDown == 330 ){
         $(".goal").show();
         setTimeout(reload,2000);
      }
   }

   if(e.keyCode == arrowUp){
      $(".ball").css("top", upOrDown);
      upOrDown -= 10;
   }

   if(e.keyCode == arrowDown){
      $(".ball").css("top", upOrDown);
      upOrDown += 10;
   }
   
   
});

