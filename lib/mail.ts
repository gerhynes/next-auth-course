import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendTwoFactorTokenEmail(email: string, token: string) {
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "2FA Code",
    html: `<p>Your Two Factor Authentication Code: ${token}</p>`,
  });
}

export async function sendVerificationEmail(email: string, token: string) {
  const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Confirm your email",
    html: `<p>Click to <a href="${confirmLink}">Confirm Your Email</a></p>`,
  });
}

export async function sendPasswordResetEmail(email: string, token: string) {
  const resetLink = `http://localhost:3000/auth/new-password?token=${token}`;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Reset Your Password",
    html: `<p>Click to <a href="${resetLink}">Reset Your Password</a></p>`,
  });
}
