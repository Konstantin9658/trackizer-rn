import { FilterValue } from "@/screens/tabs/home/components/Tabs/types";
import { atom } from "jotai";

export const currentFilter = atom<FilterValue>(FilterValue.subs);
