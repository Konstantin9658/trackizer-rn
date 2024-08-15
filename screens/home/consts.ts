import { ISubscriptions } from "./types";

export const SUBSCRIPTIONS: ISubscriptions[] = [
  {
    image: require("./images/spotify.png"),
    name: "Spotify",
    bill: 5.99,
    writeOffDay: new Date(2025, 0, 25, 0, 0, 0, 0),
  },
  {
    image: require("./images/youtube.png"),
    name: "YouTube Premium",
    bill: 18.99,
    writeOffDay: new Date(2024, 7, 14, 0, 0, 0, 0),
  },
  {
    image: require("./images/oneDrive.png"),
    name: "Microsoft OneDrive",
    bill: 29.99,
    writeOffDay: new Date(2024, 8, 17, 0, 0, 0, 0),
  },
  {
    image: require("./images/netflix.png"),
    name: "Netflix",
    bill: 37.99,
    writeOffDay: new Date(2024, 6, 11, 0, 0, 0, 0),
  },
  {
    image: require("./images/hbo.png"),
    name: "HBO GO",
    bill: 15.99,
    writeOffDay: new Date(2024, 9, 3, 0, 0, 0, 0),
  },
];

export const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
