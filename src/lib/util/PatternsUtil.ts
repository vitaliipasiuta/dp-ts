import * as fs from "fs";
import * as colors from "colors";
import * as _ from "lodash";
import {patternsExamples} from "./examples";

colors.setTheme({
  t1: 'green',
  t2: 'red',
  t3: 'yellow',
});

class PatternsUtil {

  private static path: string = `${process.cwd()}/src/lib/dp`;

  static getPatterns = () => _.reduce(fs.readdirSync(PatternsUtil.path), (result, type) => {
    result[type] = _.reduce(fs.readdirSync(`${PatternsUtil.path}/${type}`), (patternsType, pattern) => {
      patternsType[pattern] = patternsExamples[pattern];
      return patternsType;

    }, {});
    return result;
  }, {});

  static print (): void {
    let typeNumber: number = 0;
    let patternNumber: number = 0;
    _.forEach(this.getPatterns(), (patterns, type) => {
      console.log(colors[`t${++typeNumber}`](type));
      _.forEach(patterns, (patternExample, patternName) => console.log(`  ${++patternNumber}. ${patternName}`));
    });

  }

  static start (pattern: number): void {
    let p: number = 0;
    _.forEach(this.getPatterns(), (patterns) => {
      _.forEach(patterns, (example) => ++p == pattern ? example["Example"].start() : "");
    });
  }

}

export {
  PatternsUtil
}