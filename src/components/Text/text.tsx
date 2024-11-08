


const sizes = {
    small: 'text-sm',
    medium: 'text-base',
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
    variant: SizeProps;
    color?: ColorsProps;
}

const Text = ({text, variant, color = "default"}: TextProps) => {
    const style = `${sizes[variant]} ${colors[color]} self-center text-white rounded-lg`
 return (
    <p className={style}>
        {text}
    </p>
 );
}
export default Text;