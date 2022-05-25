import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UUID } from 'angular2-uuid';
import { AuthService } from 'src/app/services/auth.service';
import { TasksService } from 'src/app/services/tasks.service';
import { SubTask, Task } from 'src/app/types/task';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'add-new-task',
  templateUrl: './add-new-task.component.html',
  styleUrls: ['./add-new-task.component.sass'],
})
export class AddNewTaskComponent implements OnInit {
  currentStep: number = 1;
  formAddTask!: FormGroup;
  formAddSubTask!: FormGroup;
  subscribes: SubTask[] = [];

  @Output() stateModal: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    private taskService: TasksService,
    private auth: AuthService
  ) {
    this.formAddTask = fb.group({
      title: ['', [Validators.required, Validators.min(3)]],
      description: ['', [Validators.min(3)]],
      startTime: [''],
      endTime: [''],
    });

    this.formAddSubTask = fb.group({
      name: ['', [Validators.required, Validators.max(40)]],
    });
  }

  ngOnInit(): void {
    const u = new UUID();
    console.log(u);
  }

  get getAddSubTaskValid() {
    return this.formAddSubTask.valid;
  }

  get getAddTaskValid() {
    return this.formAddTask.valid;
  }

  closeModal() {
    this.stateModal.emit(false);
  }

  addNewTask() {
    if (this.formAddTask.invalid) return;

    const { title, description, startTime, endTime } = this.formAddTask.value;
    const taskNew: Partial<Task> = {
      userUid: this.auth.userUid,
      title,
      description,
      startTime,
      endTime,
      subTask: this.subscribes,
      createAt: Date.now(),
      enabled: true,
    };

    this.taskService.createTask(taskNew);
    this.closeModal();
  }

  addSubscribe() {
    const subTask: SubTask = {
      uid: uuidv4(),
      title: this.formAddSubTask.get('name')?.value,
      status: false,
      createAt: Date.now(),
    };

    if (!this.formAddSubTask.valid) return;

    this.subscribes.push(subTask);
    this.formAddSubTask.reset();
  }

  deleteSubTask(subtask: SubTask) {
    this.subscribes = this.subscribes.filter((item: SubTask) => {
      return item.uid != subtask.uid;
    });
  }
}
