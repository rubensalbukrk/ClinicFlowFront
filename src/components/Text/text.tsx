


const sizes = {
    small: 'text-sm',
    base: 'text-base',
    large: 'text-lg',
    extra: 'text-xl',
    big: 'text-3xl',
};
const colors = {
    primary: 'text-sky-500',
    secundary: 'text-sky-600',
    default: 'text-white',
};

type SizeProps = keyof typeof sizes;
type ColorsProps = keyof typeof colors;

type TextProps = {
    text: string;
    size?: SizeProps;
    color?: ColorsProps;
    className?: string;
}

const Text = ({text, size = "base", color = "default", className}: TextProps) => {
    const style = `${sizes[size]} ${colors[color]}`
 return (
    <p className={`${style} ` + `${className}`}>
        {text}
    </p>
 );
}
export default Text;