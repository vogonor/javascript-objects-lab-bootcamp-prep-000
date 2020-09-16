function updateObjectWithKeyAndValue(object, key, value){
    
  object = {
      prop: 1, prop2:2
  }
  key = prop3
  value = 3
  var obj ={key:value} 
  var newObj = Object.assign({},object, obj)
  return newObj
}

function updateObjectWithKeyAndValue(object, key, value){
    
  object = {
      prop: 1, prop2:2
  }
 
  var obj ={key:value} 
  var newObj = Object.assign(object, obj)
  return newRecipes
}

function updateObjectWithKeyAndValue(object, key, value){
   object = {
      prop: 1, prop2:2
  }
  object.prop2 = 4
  
  var newObj = Object.assign(object)
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











