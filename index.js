function updateObjectWithKeyAndValue(object, key, value){
  
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
  var newObj = Object.assign({},object, {Key:value})
}

function  deleteFromObjectByKey(object, key)
 {
   
   var newObj = Object.assign({}, object)
   delete newObj.key
   
   return newObj
 }



