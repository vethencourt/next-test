"use client";

import { useState } from "react";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

import type { Task } from "@/store/task/types";

import TaskCreator from "./TaskCreator";
import TaskItem from "./TaskItem";
import TaskList from "./TaskList";

export default function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const onAdd = (description: string) => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      description,
      status: "New",
      isEdit: false
    };

    setTasks([...tasks, newTask]);
  };

  const onDelete = (id: string) => {
    const updatedTasks = tasks.filter((t) => t.id !== id);
    setTasks(updatedTasks);
  };

  const onEdit = (id: string) => {
    const updatedTasks = tasks.map((t) => {
      if (t.id === id) {
        const { isEdit } = t;

        return { ...t, isEdit: !isEdit };
      }

      return { ...t, isEdit: false };
    });
    setTasks(updatedTasks);
  };

  const onSubmit = (id: string, description: string) => {
    const updatedTasks = tasks.map((t) =>
      t.id === id ? { ...t, description, isEdit: false } : t
    );
    setTasks(updatedTasks);
  };

  return (
    <Container disableGutters>
      <Stack gap={2} alignItems="center">
        <TaskCreator onAdd={onAdd} />
        <TaskList
          list={tasks}
          renderItem={(task) => (
            <TaskItem
              key={task.id}
              task={task}
              onDelete={onDelete}
              onEdit={onEdit}
              onSubmit={onSubmit}
            />
          )}
        />
      </Stack>
    </Container>
  );
}
