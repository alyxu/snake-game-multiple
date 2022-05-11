const canvasarray = document.getElementsByTagName("canvas");
let ctxarray = [];
const scale = 10;
const canvas_height = canvasarray[0].height;
const canvas_width = canvasarray[0].width;
const rows = canvas_height / scale;
const columns = canvas_width / scale;

var currentWindow = 0;

(function setup() {
  for(const [i,arr] of Array.from(canvasarray).entries()){
    let ctx = arr.getContext("2d");
    ctxarray[i] = {};
    ctxarray[i].snake = new Snake(ctx);
    ctxarray[i].fruit = new Fruit(ctx);
    ctxarray[i].fruit.pickLocation();

    window.setInterval(() => {
      ctx.clearRect(0, 0, canvas_width, canvas_height);
      ctxarray[i].fruit.draw();
      ctxarray[i].snake.update();
      ctxarray[i].snake.draw();
      if (ctxarray[i].snake.eat(ctxarray[i].fruit)) {
        ctxarray[i].fruit.pickLocation();
      }
      ctxarray[i].snake.checkCollision();
    }, 250);
  }
 
}());

window.addEventListener('keydown', ((evt) => {
  switch(evt.key){
    case 'q':
      if(currentWindow == 0){
        break;
      }
      canvasarray[currentWindow].style.borderStyle = 'solid';
      currentWindow-=1 ;
      canvasarray[currentWindow].style.borderStyle = 'dashed';
      break;
    case 'e':
      if(currentWindow == canvasarray.length - 1){
        break;
      }
      canvasarray[currentWindow].style.borderStyle = 'solid';
      currentWindow+=1 ;
      canvasarray[currentWindow].style.borderStyle = 'dashed';
      break;
  }
  const direction = evt.key.replace('Arrow', '');
  ctxarray[currentWindow].snake.changeDirection(direction);
}));

