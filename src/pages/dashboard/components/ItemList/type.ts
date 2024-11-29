interface AppointProps {
    name: string
    avatar: string
    phone: string
    date: Date
    email: string
    medic: string
    plan: string
    treatment: string
}

type variantProps = "date" | "price" | "price-pay";
type menuTypeProps = "appointsConfirm" | "reAppointsReturn" | "reAppointsCancel" | "accountPay" | "accountReceive"

export type {AppointProps, menuTypeProps, variantProps}