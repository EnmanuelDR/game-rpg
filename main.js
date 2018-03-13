var Context = {
  canvas : null,
  context : null,
  create: function(canvas_tag_id) {
    this.canvas = document.getElementById(canvas_tag_id);
    this.context = this.canvas.getContext('2d');
    return  this.context;
  }
  
};
var.sprite = function(filename,is_pattern){
  
  //construct
  this.image =null
  this.pattern=null
  this.to_Radians =math.pi/180;
  
  if(filename !=undefined && filename !=""&&filename !=null)
{
  this.image=new image();
  this.image.src = filename;
  
  if(is_pattern)
    this.pattern = Context.context.createpattern(this.image,'repeat');
}
  else
    console.log("unable to load sprite");
  this.draw = function (x,y,w,h)
{
    //pattern ?
    if.(this.pattern != null)
    {
      Context.context.fillstyle = this.pattern;
      Context.context.fillrect(x,y,w,h);
    } else {
      
      
      
      
      
    }
};
  
  
};  

$(document).ready(function() {
  
  //initialize
  Context.create("canvas");
  
  Context.context.beginpath();
  Context.context.rect(0,0,640,480);
  Context.context.fillStyle = 'black';
  Context.context.fill();
  
  
  Context.context.beginpath();
  //draw,red...
  
  
  
  
});