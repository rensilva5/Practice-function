function titleCase(str) {
    let word = str.toLowerCase().split(' ')
    //console.log(word)
    for (let i=0; i<word.length; i++)
    word[i] = word[i][0].toUpperCase() + word[i].slice(1)
    
    // console.log(word)
    return word.join(' ')
    
    
    
}
console.log(titleCase('I am a developer'))