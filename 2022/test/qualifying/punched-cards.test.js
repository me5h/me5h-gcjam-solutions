const punchedCards = require('../../qualifying/punched-cards/index');

describe('splitInput', () => {
    test('sample.in', () => {
        expect(
            punchedCards.splitInput(`3
3 4
2 2
2 3`.split(/\r?\n/))
        )
        .toStrictEqual(
            [
                [3,4],
                [2,2],
                [2,3],
            ]
        );
    });
});

describe('solve', () => {
    test('[3,4]', () => {
        expect(punchedCards.solve([3,4])).toBe(`..+-+-+-+
..|.|.|.|
+-+-+-+-+
|.|.|.|.|
+-+-+-+-+
|.|.|.|.|
+-+-+-+-+`);
    });
});

describe('solveInputs', () => {
    test('sample.in', () => {
        expect(
            punchedCards.solveInputs(`3
3 4
2 2
2 3`.split(/\r?\n/))
        )
        .toStrictEqual(
            [
                `Case #1:
..+-+-+-+
..|.|.|.|
+-+-+-+-+
|.|.|.|.|
+-+-+-+-+
|.|.|.|.|
+-+-+-+-+`,
                `Case #2:
..+-+
..|.|
+-+-+
|.|.|
+-+-+`,
                `Case #3:
..+-+-+
..|.|.|
+-+-+-+
|.|.|.|
+-+-+-+`,
            ]
        );
    });
});
