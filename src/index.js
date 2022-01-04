module.exports = function reverse (n) {
  let nString = n.toString();
  let newN = '';
  if (n > 0) {
     for (let i = 0; i < nString.length; i++) {
       newN = `${nString[i]}` + newN;
     }
    return Number(newN);
  }else{
      nString = Math.abs(nString).toString();
      for (let i = 0; i < nString.length; i++) {
        newN = `${nString[i]}` + newN;
      }
     return Number(newN);
  }
  
}
