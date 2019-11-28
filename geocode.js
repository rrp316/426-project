//given an input string like: Chapel Hill, North Carolina
//output it as: Chapel+Hill+North+Carolina
function parseInput(s) {
    let words = [];
    let currentWord = [];
    for (let i = 0; i < s.length; i++) {
        let c = s.charAt(i);
        if (c != ' ') {
            currentWord.push(c);
        } else {
            let string = currentWord.join("");
            words.push(string);
            currentWord = [];
        }
    }

    let result = '';
    words.forEach(e => {
        result += e;
        result += '+';
    });
    result = result.substring(0, result.length - 1);

    return result;
}