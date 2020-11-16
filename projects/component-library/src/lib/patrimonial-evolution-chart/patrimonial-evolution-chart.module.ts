import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { PatrimonialEvolutionChartComponent } from './patrimonial-evolution-chart/patrimonial-evolution-chart.component';

@NgModule({
  declarations: [PatrimonialEvolutionChartComponent],
  imports: [CommonModule, ChartsModule],
  exports: [PatrimonialEvolutionChartComponent],
})
export class PatrimonialEvolutionChartModule {}
