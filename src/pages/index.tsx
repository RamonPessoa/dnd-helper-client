import SignupForm from "@/presentation/containers/signup-form/signup-form";

export default function Home() {
  return (
    <main className="flex flex-col items-center pt-20 h-screen login-bg">
      <div className="flex flex-col gap-24 w-full max-w-xl">
        <h1 className="text-center text-2xl">DnD Helper</h1>
        <SignupForm />
      </div>
    </main>
  );
}
