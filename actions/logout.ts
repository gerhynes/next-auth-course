"use server";

import { signOut } from "@/auth";

// use if you want to do some logic on the server before logging out the user
export async function logout() {
  await signOut();
}
