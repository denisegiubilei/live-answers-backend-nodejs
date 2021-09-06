import blockedlist from "../blockedlist";

export function isFieldEmpty(field: string) {
  return (!field || field.trim().length === 0);
}

export function isOnBlockedList(text: string) {
  return blockedlist.includes(text?.toLowerCase().trim());
}