module.exports = function check(str, bracketsConfig) {
    
  let bracketsConfigSplit = bracketsConfig.toString().split(',').join('');
  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  let  bracketsReg = new RegExp("[^" + escapeRegExp(bracketsConfigSplit) +"]", "g");
  let strWithOnlyBrackets = str.replace(bracketsReg,"");

  let previosState="";

  while(strWithOnlyBrackets.length != previosState.length) {
    previosState = strWithOnlyBrackets;
    bracketsConfig.forEach(function(item){
      strWithOnlyBrackets = strWithOnlyBrackets.replace(item.join(""), "")
    })
  }
  return !strWithOnlyBrackets;
}
