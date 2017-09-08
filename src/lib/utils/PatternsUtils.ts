import {readdirSync} from "fs";
import * as colors from "colors";
import * as _ from "lodash";
import examplesList from "./examplesList";

class PatternsUtils {

  private static path: string = `${process.cwd()}/src/lib/dp`;

  static getPatterns = () => _.reduce(readdirSync(PatternsUtils.path), (result, type) => {
    result[type] = _.reduce(readdirSync(`${PatternsUtils.path}/${type}`), (patternsType, pattern) => {
      patternsType[pattern] = examplesList[pattern];
      return patternsType;
    }, {});
    return result;
  }, {});

  static print (): void {
    colors.setTheme({
      t1: 'red',
      t2: 'green',
      t3: 'yellow',
    });

    let typeNumber: number = 0;
    let patternNumber: number = 0;

    console.log('Choose pattern example number:');
    _.forEach(this.getPatterns(), (patterns, type) => {
      console.log(colors[`t${++typeNumber}`](type));
      _.forEach(patterns, (patternExample, patternName) => console.log(`  ${++patternNumber}. ${patternName}`));
    });
  }

  static start (pattern: number): void {
    let p: number = 0;
    _.forEach(this.getPatterns(), (patterns) => {
      _.forEach(patterns, (example) => ++p == pattern ? example.start() : "");
    });
  }

}

export default PatternsUtils;
