interface MembersInterface {
  Name: string
  Icon: string
}

interface UsersInterface {
  Date: any
  TimeFrom: string
  TimeTo: string
  Members: Array<MembersInterface>
  Note: string
  Group: string
  Title: string
  Id: number
}

export const Event: UsersInterface[] = [];
