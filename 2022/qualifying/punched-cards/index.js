/**
 * Accepts an array of lines and organises into separate cases.
 */
const splitInput = input => input.slice(1).map(i => i.split(' ').map(Number));

/**
 * Accepts a single input case and returns the result as a string.
 * input is no longer a string, 
 */
const solve = ([R,C]) => {
    // ..+-+-+-+
    let art1 = '..+';
    let art2 = '..|';
    let art3 = '+-+';
    let art4 = '|.|';

    for (let i=0; i<C-1; i++){
        art1 += '-+';
        art2 += '.|';
        art3 += '-+';
        art4 += '.|';
    }
    const art = [art1, art2, art3];

    for (let i=0; i<R-1; i++){
        art.push(art4,art3);
    }
    return art.join("\n");
};

/**
 * Accepts all lines of input and prepares all solutions.
 */
const solveInputs = inputs => {
	const cases = [];
	splitInput(inputs).forEach((data, i) => {
		cases.push(`Case #${i+1}:
${solve(data)}`);
	});
	return cases;
};

/**
 * If stdin is detected then pass all lines to solveInputs.
 * 
 * Send results to stdout.
 */
if (!Boolean(process.stdin.isTTY)) {
    const lines = [];
    require('readline').createInterface({
        input: process.stdin,
    }).on('line', line => {
        lines.push(line);
    }).on('close', () => {
        solveInputs(lines).forEach(line => {
            console.log(line);
        });
    });
}

/**
 * Export all functions that we want to test.
 */
module.exports = {
	splitInput,
	solve,
	solveInputs,
};
