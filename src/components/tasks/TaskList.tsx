"use client";

import { ReactNode } from "react";
import List from "@mui/material/List";

import type { Task } from "@/store/task/types";

export interface TaskListProps {
  list: Task[];
  renderItem: (task: Task) => ReactNode;
}

export default function TaskList(props: TaskListProps) {
  const { list, renderItem } = props;

  return <List>{list.map((task) => renderItem(task))}</List>;
}
