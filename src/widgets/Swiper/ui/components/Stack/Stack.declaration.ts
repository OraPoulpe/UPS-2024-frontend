import { ReactNode } from "react";

export interface IStackProps {
    children: React.ReactElement[];
    onVote: (item: ReactNode, vote: boolean) => void;
}