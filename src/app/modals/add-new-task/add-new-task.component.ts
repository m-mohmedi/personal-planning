import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
interface subscribe {
  id: number;
  title: string;
  status: boolean;
}
@Component({
  selector: 'add-new-task',
  templateUrl: './add-new-task.component.html',
  styleUrls: ['./add-new-task.component.sass'],
})
export class AddNewTaskComponent implements OnInit {
  currentStep: number = 2;
  formAddTask!: FormGroup;
  formAddSubTask!: FormGroup;
  subscribes: subscribe[] = [];

  @Output() stateModal: EventEmitter<boolean> = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.formAddTask = fb.group({
      name: ['name', [Validators.required, Validators.min(3)]],
      startTime: ['startTime'],
      endTime: ['endTime'],
    });

    this.formAddSubTask = fb.group({
      name: ['name', [Validators.required, Validators.max(40)]],
    });
  }

  ngOnInit(): void {}

  closeModal() {
    this.stateModal.emit(false);
  }

  addSubscribe() {}
}
