import { Component, input, InputSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { Description } from '../../../model/listing.model';

@Component({
  selector: 'app-description-step',
  imports: [InputTextModule, FormsModule],
  templateUrl: './description-step.component.html',
  styleUrl: './description-step.component.scss'
})
export class DescriptionStepComponent {
  description: InputSignal<Description> = input.required<Description>();

}
