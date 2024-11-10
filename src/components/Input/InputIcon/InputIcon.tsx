import { InputIconProps } from "../type";
import "../../../App.css"

const InputIcon: React.FC<InputIconProps> = ({icon}) => {
    return <div className="absolute left-2 bottom-[20%] translate-y-[20%]">{icon}</div>;
}

export default InputIcon;