"use client";

import { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

import type { Task } from "@/store/task/types";

export interface TasItemProps {
  task: Task;
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
  onSubmit: (id: string, descripton: string) => void;
}

export default function TasItem(props: TasItemProps) {
  const { task, onDelete, onEdit, onSubmit } = props;
  const { id, description, isEdit } = task;
  const [desc, setDesc] = useState(description);

  return (
    <ListItem
      secondaryAction={
        <Stack direction="row" gap={1}>
          <IconButton
            edge="end"
            aria-label="edit"
            onClick={() => onEdit(id)}
            disabled={isEdit}
          >
            <EditIcon />
          </IconButton>
          <IconButton edge="end" aria-label="delete" onClick={() => onDelete(id)}>
            <DeleteIcon />
          </IconButton>
          {isEdit && (
            <>
              <IconButton edge="end" aria-label="delete" onClick={() => onSubmit(id, desc)}>
                <CheckIcon />
              </IconButton>
              <IconButton edge="end" aria-label="delete" onClick={() => onEdit(id)}>
                <CloseIcon />
              </IconButton>
            </>
          )}
        </Stack>
      }
    >
      {isEdit ? (
        <TextField
          value={desc}
          placeholder="edit task"
          variant="standard"
          onChange={(e) => setDesc(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onSubmit(id, desc)}
          sx={{ mr: 8 }}
        />
      ) : (
        <ListItemText className="mr-8" primary={description} />
      )}
    </ListItem>
  );
}
