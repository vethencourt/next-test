export type Task = {
  id: string;
  description: string;
  status: Status;
  isEdit: boolean;
};

export type Status = "New" | "In progress" | "Done";
