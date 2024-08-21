import { FilterValue } from "@/screens/home/components/Tabs/types";
import { atom } from "jotai";

export const currentFilter = atom(FilterValue.subs);
