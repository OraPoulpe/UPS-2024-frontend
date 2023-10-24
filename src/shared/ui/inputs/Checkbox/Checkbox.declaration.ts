export interface ICheckBoxProps {
    id: number,
    onChange(id: number, checked: boolean): void;
    checked: boolean;
    styled?: boolean;
}