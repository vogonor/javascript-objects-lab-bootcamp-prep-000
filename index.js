function updateObjectWithKeyAndValue(object, key, value){
 var recipes
 
  object.key = value
  
  return object
}

function updateObjectWithKeyAndValue(object, key, value){
  
  var newObj = Object.assign(object, {key:value})
  
  return newObj
}

function updateObjectWithKeyAndValue(object, key, value){
  
  var newObj = Object.assign({},object, {key:value})
  
  return newObj
}

function  destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  var newObj = Object.assign(object, {Key:value})
}

function  deleteFromObjectByKey(object, key)
 {
   var myVal = object.key
   var myObj = {key:myVal}
   var newObj = Object.assign({}, object)
   delete newObj.key
   
   return newObj
 }

function destructivelyDeleteFromObjectByKey(object, key){

  var newObj = Object.assgn(object)
  delete newObj.key
  return newObj
}











