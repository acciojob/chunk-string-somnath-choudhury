function stringChop(str, num) {
  // your code here
	if (str === null)
		return null;

	const answerArr = []
    let n = str.length
    let newWord = ""
    for (let i = 0; i < n ; i++) {
        let ch = str[i];

        newWord += ch
        if (newWord.length === num) {
            answerArr.push(newWord)
            newWord = "";
        }

    }
     if (newWord.length > 0) {
       answerArr.push(newWord);
     }

	return answerArr;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
