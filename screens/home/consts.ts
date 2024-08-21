import { ISubscriptions } from "./types";

export const SUBSCRIPTIONS: ISubscriptions[] = [
  {
    imgUrlThumbnail: require("./images/spotify.png"),
    name: "Spotify",
    bill: 5.99,
    writeOffDay: "2025-01-24T20:00:00.000Z",
  },
  {
    imgUrlThumbnail: require("./images/youtube.png"),
    name: "YouTube Premium",
    bill: 18.99,
    writeOffDay: "2024-08-13T20:00:00.000Z",
  },
  {
    imgUrlThumbnail: require("./images/oneDrive.png"),
    name: "Microsoft OneDrive",
    bill: 29.99,
    writeOffDay: "2024-09-16T20:00:00.000Z",
  },
  {
    imgUrlThumbnail: require("./images/netflix.png"),
    name: "Netflix",
    bill: 37.99,
    writeOffDay: "2024-07-10T20:00:00.000Z",
  },
  {
    imgUrlThumbnail: require("./images/hbo.png"),
    name: "HBO GO",
    bill: 15.99,
    writeOffDay: "2024-10-02T20:00:00.000Z",
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
