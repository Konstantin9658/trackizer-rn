export type SubsType = "active" | "highest" | "lowest";

export interface SubsInfoProps {
  value: number;
  type: SubsType;
}

export enum SubsInfoTitle {
  "active" = "Active subs",
  "highest" = "Highest subs",
  "lowest" = "Lowest subs",
}
