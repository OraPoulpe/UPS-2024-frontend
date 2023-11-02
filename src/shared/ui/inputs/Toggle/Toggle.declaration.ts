export interface IToggleProps {
    id?: number,
    onChange?(checked: boolean): void;
    checked?: boolean;
    styled?: boolean;
}

export interface IToggleStyle {
    checked: boolean
}