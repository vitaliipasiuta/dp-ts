import {start} from "prompt";
import PatternsUtils from "./utils/PatternsUtils";

PatternsUtils.print();

start().get("pattern", (e, r): void => PatternsUtils.start(r.pattern));
