import { ArgumentParser } from 'argparse'
import fs from 'node:fs';
import {Solution1} from './solution1.js';
import { Solution2 } from './solution2.js';
import { Solution3 } from './solution3.js';
import { Solution4 } from './solution4.js';
import { Solution5 } from './solution5.js';
import { Solution6 } from './solution6.js';
import { Solution7 } from './solution7.js';
import { Solution8 } from './solution8.js';
import { Solution9 } from './solution9.js';
import { Solution10} from './solution10.js';
import { Solution11} from './solution11.js';
import { Solution12} from './solution12.js';


class Solver {
    constructor(day, part, input) {
        this.day = typeof day === 'string' ? parseInt(day) : day;
        this.part = typeof part === 'string' ? parseInt(part) : part;
        if (input == undefined) {
            this.input = fs.openSync(`input${day}`, 'r');
        } else {
            this.input = input;
        }
    }
    //Returns a Buffer
    readInput() {
        if (typeof this.input === 'string') {
            return Buffer.from(this.input);
        }
        const fileSize = fs.fstatSync(this.input).size;
        const buffer = Buffer.alloc(fileSize);

        let totalBytesRead = 0;

        while (totalBytesRead < fileSize) {
            const bytesRead = fs.readSync(
                this.input,
                buffer,
                totalBytesRead,
                fileSize - totalBytesRead,
                null
            );

            if (bytesRead === 0) {
                break; // EOF
            }

            totalBytesRead += bytesRead;
        }
        return buffer.subarray(0, totalBytesRead);
    }
    toString() {
     return `Day ${this.day} Part ${this.part}`;
    }

    run() {
        let solution;
        switch(this.day) {
            case 1: 
                solution = new Solution1();
                break;
            case 2: 
                solution = new Solution2();
                break;
            case 3: 
                solution = new Solution3();
                break;
            case 4: 
                solution = new Solution4();
                break;
            case 5: 
                solution = new Solution5();
                break;
            case 6: 
                solution = new Solution6();
                break;
            case 7: 
                solution = new Solution7();
                break;
            case 8: 
                solution = new Solution8();
                break;
            case 9: 
                solution = new Solution9();
                break;
            case 10:
                solution = new Solution10();
                break;
            case 11:
                solution = new Solution11();
                break;
            case 12:
                solution = new Solution12();
                break;
            default: 
                throw new Error(`Invalid day ${this.day}`);
        }
        switch (this.part) {
            case 1: 
                return solution.solvePart1(this.readInput());
            case 2: 
                return solution.solvePart2(this.readInput());
            default:
                throw new Error(`Invalid part ${this.part}`);
        }        
    }
}


const parser = new ArgumentParser({ description: 'Advent of code 2026' });
parser.add_argument('--day', {help: "Day", required: true});
parser.add_argument('--part', {help: "Part", required: true});
parser.add_argument('--input', {help: "Input file", required: false});

let args = parser.parse_args()
const input = args.input !== undefined  ? fs.openSync(args.input, 'r') : undefined;
// input.toString('utf8')
const solver = new Solver(args.day, args.part, input);
console.log(solver.run());

