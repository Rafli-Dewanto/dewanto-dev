export function validateEmail(
  email: string | undefined,
  maxEmailLength: number,
): boolean {
  if ((email?.length as number) > maxEmailLength || email === undefined) {
    return false;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
