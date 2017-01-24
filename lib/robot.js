'use strict';
const directions = [ 'north', 'east', 'south','west']
function Robot() {
  // implement your solution here!

 
  


}

Robot.prototype.orient = function(currentDirection){
  
    if (directions.includes(currentDirection)){
      this.bearing = currentDirection
    }
   else {
    throw new TypeError("Invalid Robot Bearing") 
   } 
}

Robot.prototype.turnRight = function(){
  var index = directions.indexOf(this.bearing)
  if (index < 3){
    this.bearing = directions[index+1] }
  else {
    this.bearing = directions[0]
  }  
}

Robot.prototype.turnLeft = function(){
  var index = directions.indexOf(this.bearing)
  if (index > 0){
    this.bearing = directions[index-1] }
  else {
    this.bearing = directions[directions.length-1]
  }  
}

Robot.prototype.at = function(x,y){
  this.x = x
  this.y = y
  this.coordinates = [this.x, this.y]
}

Robot.prototype.advance = function(){

 switch(this.bearing) { 
  case "north":  
    this.at(this.x, this.y += 1)
    break;
  case "east":   
    this.at(this.x += 1, this.y)
    break;
  case "south":    
    this.at(this.x, this.y -= 1)
    break;
  case "west":    
    this.at(this.x -= 1, this.y)
    }      
}

Robot.prototype.instructions = function(instructions){
  var commandList = instructions.split("")
  var newlist = commandList.map((command) => {
    switch(command){
      case "L":
        return "turnLeft"

      case "R":
        return "turnRight"        

      case "A":
       return "advance"
    }
  })
  return newlist
}

Robot.prototype.place = function(object){
  this.at(object.x, object.y)
  this.bearing = object.direction
}

Robot.prototype.evaluate = function(instructions){
  //this.place(x,y,direction)
  this.instructions(instructions).forEach((instruction) => {
    //debugger
    this[instruction]()
  })
}





