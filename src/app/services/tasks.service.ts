import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Task } from '../types/task';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private userTaskCol!: AngularFirestoreCollection<Task>;
  userTask!: Observable<Task[]>;

  constructor(private afs: AngularFirestore) {
    this.userTaskCol = this.afs.collection('tasks');
  }

  get userAuth() {
    return;
  }
  get getUserTask() {
    return;
  }

  createTask(task: Partial<Task>) {
    this.userTaskCol.add(task as Task);
  }
  updateTask() {}
  deleteTask() {}
}

// constructor(private afs: AngularFirestore, private http: HttpClient) {
//   this.userTaskCollection = afs.collection<Task>('user-posts');
//   this.userTask = this.userTaskCollection.valueChanges({ idField: 'id' });
// }

// addUserTask(userPost: Task): Observable<DocumentReference> {
//   return from(this.userTaskCollection.add(userPost));
// }

// updateTask(userPost: Task): Observable<void> {
//   return from(
//     this.afs.doc<Task>(`task/${userPost.id}`).update({
//       purrs: ++userPost.purrs,
//     })
//   );
// }
