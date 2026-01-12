"use client";

import Typography from "@mui/material/Typography";

export default function Header() {
  return (
    <header className="w-full bg-gray-600 p-4">
      <Typography variant="h3" component="h1" className="text-center">
        Things that Need Doing
      </Typography>
    </header>
  );
}
