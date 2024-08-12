import { ISubscriptions } from "./types";

export const SUBSCRIPTIONS: ISubscriptions[] = [
  {
    image: require("./images/spotify.png"),
    name: "Spotify",
    bill: 5.99,
    writeOffDay: {
      day: 25,
      month: "Jun",
    },
  },
  {
    image: require("./images/youtube.png"),
    name: "YouTube Premium",
    bill: 18.99,
    writeOffDay: {
      day: 14,
      month: "Aug",
    },
  },
  {
    image: require("./images/oneDrive.png"),
    name: "Microsoft OneDrive",
    bill: 29.99,
    writeOffDay: {
      day: 17,
      month: "Sep",
    },
  },
  {
    image: require("./images/netflix.png"),
    name: "Netflix",
    bill: 37.99,
    writeOffDay: {
      day: 11,
      month: "Jul",
    },
  },
  {
    image: require("./images/hbo.png"),
    name: "HBO GO",
    bill: 15.99,
    writeOffDay: {
      day: 3,
      month: "Oct",
    },
  },
];
