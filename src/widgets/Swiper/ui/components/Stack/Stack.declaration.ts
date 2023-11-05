import { ReactElement, ReactNode } from "react";

export interface IStackProps {
    children: React.ReactElement[];
    onVote: (item: ReactElement, vote: boolean) => void;
}