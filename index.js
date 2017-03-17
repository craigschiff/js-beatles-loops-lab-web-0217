function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (var i = 0; i < musicians.length; i += 1){
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array
}

function johnLennonFacts(facts) {
  let i = 0
  const array = []
  while (i < facts.length){
    array.push(`${facts[i]}!!!`)
    i += 1
  }
  return array
}

function iLoveTheBeatles (num){
  const array = []
  do { array.push('I love the Beatles!'), num+= 1
  }while (num < 15)

  return array
}
