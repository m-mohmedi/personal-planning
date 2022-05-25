export interface Task {
  uid: string;
  userUid: string;
  title: string;
  description: string;
  startTime?: string;
  endTime?: string;
  subTask: SubTask[];
  createAt?: number;
  updateAt?: number;
  enabled?: boolean;
}

export interface SubTask {
  uid: string;
  title: string;
  description?: string;
  status: boolean;
  timeSpend?: number[];
  timerStart?: number;
  createAt?: number;
  updateAt?: number;
  enabled?: boolean;
}
