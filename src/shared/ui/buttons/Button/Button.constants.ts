//TODO: добавить варианты размера кнопок как константы medium and small

export const BUTTON_TYPE = 'button';
export const SUBMIT_TYPE = 'submit';

export const BUTTON_TYPES = [BUTTON_TYPE, SUBMIT_TYPE] as const;

export const PRIMARY_VARIANT = 'primary';
export const SECONDARY_VARIANT = 'secondary';

export const BUTTON_VARIANTS = [PRIMARY_VARIANT, SECONDARY_VARIANT] as const;
