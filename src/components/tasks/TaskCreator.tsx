"use client";

import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

export interface TaskCreatorProps {
  onAdd: (description: string) => void;
}

export default function TaskCreator(props: TaskCreatorProps) {
  const { onAdd } = props;
  const [description, setDescription] = useState("");

  const handleAddTask = () => {
    onAdd(description);
    setDescription("");
  };

  return (
    <Stack direction="row">
      <TextField
        value={description}
        placeholder="new task"
        variant="standard"
        onChange={(e) => setDescription(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAddTask()}
      />
      <IconButton onClick={handleAddTask} aria-label="add">
        <AddIcon />
      </IconButton>
    </Stack>
  );
}
