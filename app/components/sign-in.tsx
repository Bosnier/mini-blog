import { signIn } from "@/auth"

export default function SignIn() {
  async function submit() {
    "use server"
    await signIn("github")
  }

  return (
    <form action={submit}>
      <button type="submit">Signin with GitHub</button>
    </form>
  )
}
