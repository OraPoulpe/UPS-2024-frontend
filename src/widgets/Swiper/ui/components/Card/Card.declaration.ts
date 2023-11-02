import { ReactNode } from "react";
import { DIRECTION } from "./Card.constants";

export interface ICardProps {
    drag: boolean;
    children: ReactNode;
    onVote: (result: boolean) => void
}



export type TDirection = (typeof DIRECTION)[number]