import { Person } from "./person.model";

export interface Task {
  id: number,
  title: string,
  deadlineDate: string,
  associatedPeople: Person[],
  completed: boolean,
  editing?: boolean,
}
