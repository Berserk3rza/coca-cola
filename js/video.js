//get screen width and pixel ratio
var width = screen.width;
var dpr = window.devicePixelRatio;

if (width<500){
  console.log("Small: Render No Video");
}
  else if (width< 640){
    console.log("Medium: Render Small Video");
    $("#ppcHeroNav").attr("data-src", "assets/video/mymix-aerial-small.webp");
    $("#ppcHeroNav").attr("data-srcset", "assets/video/mymix-aerial-small.webp");
  }
  else {
    console.log("Large: Render Large Video");
    $("#ppcHeroNav").attr("data-src", "assets/video/mymix-aerial.webp");
    $("#ppcHeroNav").attr("data-srcset", "assets/video/mymix-aerial.webp");
}
