interface ItemListProps {
    name: string
    avatar: string
    phone: string
    date: Date
    email: string
    medic: string
    plan: string
    treatment: string
    variant?: "date" | "price"
}

export type {ItemListProps}