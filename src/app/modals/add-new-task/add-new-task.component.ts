import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { get } from 'https';
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
  currentStep: number = 1;
  formAddTask!: FormGroup;
  formAddSubTask!: FormGroup;
  subscribes: subscribe[] = [];

  @Output() stateModal: EventEmitter<boolean> = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.formAddTask = fb.group({
      name: ['', [Validators.required, Validators.min(3)]],
      startTime: ['startTime'],
      endTime: ['endTime'],
    });

    this.formAddSubTask = fb.group({
      name: ['', [Validators.required, Validators.max(40)]],
    });
  }

  ngOnInit(): void {}

  get getAddSubTaskValid() {
    return this.formAddSubTask.valid;
  }
  get getAddTaskValid() {
    return this.formAddTask.valid;
  }

  closeModal() {
    this.stateModal.emit(false);
  }

  addSubscribe() {
    const subTask: subscribe = {
      id: this.subscribes.length - 1,
      title: this.formAddSubTask.get('name')?.value,
      status: false,
    };
    if (!this.formAddSubTask.valid) return;
    this.subscribes.push(subTask);

    this.formAddSubTask.reset();
    console.log(this.getAddSubTaskValid);
  }

  deleteSubTask(subtask: subscribe) {
    this.subscribes = this.subscribes.filter((item: subscribe) => {
      return item.id != subtask.id;
    });
  }
}
