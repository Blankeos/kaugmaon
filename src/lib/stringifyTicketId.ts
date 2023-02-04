export default function stringifyTicketId(ticket: number): string {
  const id = ticket;
  const fullNumber = id.toString();
  const maskedNumber = fullNumber.padStart(5, "0");
  return "#" + maskedNumber;
}
