"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalysis = void 0;
const MatchResult_1 = require("../../interfaces/MatchResult");
class WinsAnalysis {
    constructor(teamName) {
        this.teamName = teamName;
    }
    run(matches) {
        let teamWins = 0;
        matches.forEach(match => {
            if ((match[1] === `${this.teamName}` && match[5] === MatchResult_1.MatchResult.HomeWin) ||
                (match[2] === `${this.teamName}` && match[5] === MatchResult_1.MatchResult.AwayWin))
                teamWins++;
        });
        return `${this.teamName} won ${teamWins} games`;
    }
}
exports.WinsAnalysis = WinsAnalysis;
