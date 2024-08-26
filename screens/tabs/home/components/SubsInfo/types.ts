export enum SubsType {
  Active = "active",
  Highest = "highest",
  Lowest = "lowest",
}

export interface SubsInfoProps {
  value: number;
  type: SubsType;
}

export enum SubsInfoTitle {
  "active" = "Active subs",
  "highest" = "Highest subs",
  "lowest" = "Lowest subs",
}
