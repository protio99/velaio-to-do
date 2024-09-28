export interface Task {
  id: number,
  title: string,
  deadlineDate: string,
  associatedPeople: string,
  completed: boolean,
  editing?: boolean,
}
