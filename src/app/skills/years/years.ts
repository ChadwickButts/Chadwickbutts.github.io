import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'years',
  imports: [],
  templateUrl: './years.html',
  styleUrl: './years.css'
})
export class Years {
  yoe = input(0);

  yoeFilledFunction() {
    const totalYearsOfExp = 7;
    let yearsArray = new Array(totalYearsOfExp)

    if (this.yoe() === 0) {
      yearsArray[0] = -1;
    }

    for (let i = 0; i < this.yoe(); i++) {
      yearsArray[i] = 1;
    }

    return yearsArray;
  }

  addFillClass(value: boolean) {
    return value ? 'filled' : '';
  }
}
