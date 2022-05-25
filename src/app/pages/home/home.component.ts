import { Component, OnInit } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

interface task {
  id: number;
  title: string;
}
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  tasksCol!: AngularFirestoreCollection<task>;
  tasks: task[] = [];
  constructor(private afs: AngularFirestore) {}

  ngOnInit(): void {
    this.tasksCol = this.afs.collection('task');

    this.tasksCol.valueChanges({ idField: 'uid' }).subscribe((tasks) => {
      console.log(tasks);

      this.tasks = tasks;
    });

    this.tasksCol.ref.get().then((data) => {
      this.tasks = data.docs.map((q) => q.data());
      console.log(data.docs.map((d) => d.id));
    });
  }

  addNewTask() {
    const task: task = {
      id: 455,
      title: 'sdfsdfsdf',
    };
    this.tasksCol.add(task).then((_) => alert('OK'));
    // console.log(this.tasks);
  }
}
