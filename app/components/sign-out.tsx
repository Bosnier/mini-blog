import { signOut } from "@/auth"

export default function SignOut() {
  async function submit() {
    "use server"
    await signOut({ redirectTo: "/" })
  }

  return (
    <form action={submit}>
      <button type="submit" className="px-3 py-2 rounded-md bg-stone-900 cursor-pointer">
        Signout
      </button>
    </form>
  )
}
