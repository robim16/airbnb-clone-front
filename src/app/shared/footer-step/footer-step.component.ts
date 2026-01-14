import { Component, EventEmitter, input, Output } from '@angular/core';
import { Step } from '../../landlord/properties-create/step.model';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-footer-step',
  imports: [FaIconComponent],
  templateUrl: './footer-step.component.html',
  styleUrl: './footer-step.component.scss'
})
export class FooterStepComponent {
  currentStep = input.required<Step>()
  loading = input<boolean>(false)
  isAllStepsValid = input<boolean>(false)
  labelFinishedBtn = input<string>("Finish");

  @Output()
  finish = new EventEmitter<boolean>();
  @Output()
  previous = new EventEmitter<boolean>();
  @Output()
  next = new EventEmitter<boolean>();

 onFinish() {
    this.finish.emit(true);
  }

  onPrevious() {
    this.previous.emit(true);
  }

  onNext() {
    this.next.emit(true);
  }
}
