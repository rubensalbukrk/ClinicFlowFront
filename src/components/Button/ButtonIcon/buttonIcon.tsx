import { ButtonIconProps } from "../type";
import "../../../App.css"

const ButtonIcon: React.FC<ButtonIconProps> = ({icon}) => {
    return <div className="mx-2">{icon}</div>;
}

export default ButtonIcon;