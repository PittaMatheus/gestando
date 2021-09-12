export default interface
  IdataAudit {
  id: number,
  createdAt: Date,
  type: string,
  tagColor: string,
  before: {
    createdAt: Date,
    id: number,
    metadatas: {
      digits: number,
      name: string,
    },
    digits: number,
    name: string,
    status: string,
    updatedAt: Date | null,
    user_id: number
  },
  after: {
    createdAt: Date,
    id: number,
    metadata: {
      name: string,
      digits: number
    },
    digits: number,
    name: string,
    status: string,
    updatedAt: Date,
    user_id: number
  },
  requestedBy: number
}
