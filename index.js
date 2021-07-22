document.addEventListener("DOMContentLoaded", function() {
  // initializes the board
  init();

  // ADD CODE HERE!

    const element =document.querySelector("ul#moves-container")
   document.addEventListener("keydown", function(k){
     const li = document.createElement("li")
      switch(k.key){
        case "ArrowRight":
          li.textContent ="right";
          break;
        case "ArrowLeft":
          li.textContent = "left";
          break;
        case "ArrowUp":
          li.textContent = "up";
          break;
        case "ArrowDown":
          li.textContent = "down";
      }
      element.append(li)
      li.addEventListener("click", event => {
        event.target.remove()
      })
   })

   //bonus move
   const movebutton = document.querySelector("#move-button");
   movebutton.addEventListener("click", () =>{
    const interval = setInterval(function() {
      const next =element.querySelector("li")
      if(next){
    const direction = next.textContent
    
    move(direction)
    next.remove()
      }
      else{
        clearInterval(interval);
      }
  },500)})
});
