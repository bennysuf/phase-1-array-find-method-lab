
//     function superbowlWin(element) {
//      const result = element.find(isWin => isWin.result === "W")
//      if (result){
//       return result.year;
//      }  
// }

function superbowlWin(array) {
  const winningSeason = array.find(function (blah) {
    return blah.result === "W";
  })
  if (winningSeason) {
    return winningSeason.year;
  }
}