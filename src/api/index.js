export default class {
  async getTickets() {
    const raw = await fetch('/tickets.json')
    return await raw.json()
  }
}