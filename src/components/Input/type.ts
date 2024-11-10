import {InputHTMLAttributes, LabelHTMLAttributes } from "react";


type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    id: string;
    children?: React.ReactNode;
    icon?: React.ReactNode;
    asWarning?: boolean; 
}

type InputIconProps = {
    icon: React.ReactNode;
}

type InputLabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
    id?: string;
    children: React.ReactNode;
}

type LabelWarningProps = LabelHTMLAttributes<HTMLParagraphElement> & {
    warning: boolean;
    label: string;
}

export type {InputProps, LabelWarningProps, InputIconProps,InputLabelProps}; 