const band={
  bandName:" Nidgut",
  FamousSong:"Game",
  Year:2021,
  anotherFamousSong:"Just Listen"
}
console.log(band);
let{bandName,FamousSong,...anit}=band
console.log(bandName);
console.log(anit);