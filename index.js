function updateObjectWithKeyAndValue(object, key, value){
    
  object = {
      prop: 1, prop2:2
  }
 
 key 
  var newRecipes = Object.assign(object)
  return newRecipes
}

function updateObjectWithKeyAndValue(object, key, value){
    
  object = {
      tomato: "Soup special",
      bagel: "bagel mix", 
 }
 
  key = "spinach"
  value = "spinach soup"
  newObj = {key:value}
  var newRecipes = Object.assign(object,newObj)
  return newRecipes
}

function updateObjectWithKeyAndValue(object, key, value){
  object = {
    tomato: "Soup special",
    bagel: "bagel mix", 
 }
  var newObj = Object.assign({},object, {key:value})
  
  return newObj
}

function  destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  
  var recipes = {
    tomato: "Soup special",
    bagel: "bagel mix", 
 }
  var newObj = Object.assign(object, {Key:value})
}

function  deleteFromObjectByKey(object, key)
 {
   var recipes = {
    tomato: "Soup special",
    bagel: "bagel mix", 
 }
   var myVal = object.key
   var myObj = {key:myVal}
   var newObj = Object.assign({}, object)
   delete newObj.key
   
   return newObj
 }

function destructivelyDeleteFromObjectByKey(object, key){

  var recipes = {
    tomato: "Soup special",
    bagel: "bagel mix", 
 }
  var newObj = Object.assign(object)
  delete newObj.key
  return newObj
}











