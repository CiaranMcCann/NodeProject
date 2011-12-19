$(document).ready(function(){
  
  var App;
  App = {};
  /*
    Init 
  */
  App.init = function() {
    App.canvas = document.createElement('canvas');
    App.canvas.height = 400;
    App.canvas.width = 800;
    document.getElementsByTagName('article')[0].appendChild(App.canvas);
    App.ctx = App.canvas.getContext("2d");
    App.ctx.fillStyle = "solid";
    App.ctx.strokeStyle = "#ECD018";
    App.ctx.lineWidth = 5;
    App.ctx.lineCap = "round";
    App.socket = io.connect('http://localhost:4000');
   
    App.socket.on('drawAndUpdateGameLogicEvent', function(data) {
      return App.draw(data.x, data.y);
    });
   

   
    App.draw = function(x, y) {
      App.ctx.fillStyle = "rgb(200,0,0)"; 
      App.ctx.fillRect(x,y,10,10);
      console.log(x,y);
    };

  };

  App.init();

  $('canvas').click(function(e) {   
       App.socket.emit('smove', {
           x: e.pageX,
           y: e.pageY
      });    
      console.log('sent');
  });

 

});






