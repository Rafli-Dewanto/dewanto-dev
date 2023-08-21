export function validateMessage(
  message: unknown,
  maxMessageLength: number,
): boolean {
  if (
    !message ||
    typeof message !== "string" ||
    message?.length > maxMessageLength
  ) {
    return false;
  }
  return true;
}
