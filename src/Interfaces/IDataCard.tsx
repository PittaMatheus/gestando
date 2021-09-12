export default interface
  IdataCard {
  createdAt: Date,
  updatedAt: Date | null,
  status: string,
  id: number,
  tagColor: string,
  metadatas: {
    name: string,
    digits: number,
    limit: number
  }
}
