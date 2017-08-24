import * as prompt from "prompt";
import {PatternsUtil} from "./util/PatternsUtil";

console.log('Choose pattern example number:');

PatternsUtil.print();

prompt.start().get("pattern", (err, result): void => PatternsUtil.start(result.pattern));