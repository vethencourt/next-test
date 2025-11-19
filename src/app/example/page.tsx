import Button from "@mui/material/Button";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-col items-center justify-between bg-white sm:items-start dark:bg-black">
        <h1 className="max-w-xs text-3xl leading-10 font-semibold tracking-tight text-black dark:text-zinc-50">
          Example
        </h1>
        <Button variant="contained">Hello world</Button>
      </main>
    </div>
  );
}
