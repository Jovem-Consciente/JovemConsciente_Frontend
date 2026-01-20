export function redirectByRole(role: string) {
  if (role === "pacient") location.href = "http://localhost:3001";
  if (role === "psy") location.href = "http://localhost:3002";
}
