interface InputAutoCompleteProps<T> {
    data: T[]
    label: string
    onSelect: (value: any) => void
    value: any
}

export type {InputAutoCompleteProps}