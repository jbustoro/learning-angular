import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "calculator"
})
export class CalculatorPipe implements PipeTransform {
  // data | calculator: otherData
  // param1             param2
  transform(value1: any, value2: any) {
    let operations = `
      sum: ${value1 + value2}
      rest: ${value1 - value2}
      mult: ${value1 * value2}
      div: ${value1 / value2}
    `;

    return operations;
  }
}
