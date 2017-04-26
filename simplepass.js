//type checkString below
function checkString(str){
  if(str.length>=8){
    return str;
  }
  else if(str.length<=20){
    return str;
  }
  else{
    throw new rangeError("Not the right length");
  }
}
//type getString below
function getString(str){
  try{
    str= checkString(str);
  }
  catch(e){
    console.log(e.message);
    getString(str);
  }
}
