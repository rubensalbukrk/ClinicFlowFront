import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CheckIcon from '@mui/icons-material/Check';
import { MenuItem } from '@mui/material';
import {AppointProps} from 'dashboard/components/ItemList/type'
import { InvoiceProps } from 'src/pages/dashboard/types/InvoiceProps';


const accountReceiveOptions = [
  {
      id: 1,
      title: 'Confirmar',
      icon: CheckIcon,
      action: (appoint: AppointProps | InvoiceProps) => {
          alert(`RECEBER DE ${appoint.name}`)
      }
  },
  {
      id: 2,
      title: 'Cancelar',
      icon: CheckIcon,
      action: () => alert(`CANCELAR RECEBIMENTO`)
  }
];
const accountPayOptions = [
    {
        id: 1,
        title: 'Pagar',
        icon: CheckIcon,
        action: (item: AppointProps | InvoiceProps) => {
            alert(`PAGAR para ${item.name}`)
        }
    },
    {
        id: 2,
        title: 'Cancelar',
        icon: CheckIcon,
        action: (item: AppointProps | InvoiceProps) => alert(`CANCELAR PAGAMENTO DE ${item.name}`)
    }
];
const invoicePlansOptions = [
  {
      id: 1,
      title: 'Ver mais',
      icon: CheckIcon,
      action: (item: AppointProps | InvoiceProps) => {
          alert(`VER MAIS para ${item.name}`)
      }
  },
  {
      id: 2,
      title: 'Cancelar',
      icon: CheckIcon,
      action: (item: AppointProps | InvoiceProps) => alert(`CANCELAR PAGAMENTO DE ${item.name}`)
  }
];
const invoiceProfessionalsOptions = [
  {
      id: 1,
      title: 'Ver mais',
      icon: CheckIcon,
      action: (item: AppointProps | InvoiceProps) => {
          alert(`VER MAIS para ${item.name}`)
      }
  },
  {
      id: 2,
      title: 'Cancelar',
      icon: CheckIcon,
      action: (item: AppointProps | InvoiceProps) => alert(`CANCELAR PAGAMENTO DE ${item.name}`)
  }
];
const appointsConfirmOptions = [
  {
      id: 1,
      title: 'Confirmar',
      icon: CheckIcon,
      action: (item: AppointProps | InvoiceProps) => {
          alert(`CONFIRMAR para: ${item.name}`)
      }
  },
  {
      id: 2,
      title: 'Cancelar',
      icon: CheckIcon,
      action: () => alert(`AÇÃO para CANCELAR`)
  }
];
const reAppointsReturnOptions = [
  {
      id: 1,
      title: 'Reagendar',
      icon: CheckIcon,
      action: (item: AppointProps | InvoiceProps) => {
          alert(`REAGENDAR para: ${item.name}`)
      }
  },
  {
      id: 2,
      title: 'Excluir',
      icon: CheckIcon,
      action: (item: AppointProps | InvoiceProps) => {
        alert(`EXCLUIR para: ${item.name}`)
      }
  }
];
const reAppointsCancelOptions = [
  {
      id: 1,
      title: 'Reagendar',
      icon: CheckIcon,
      action: (item: AppointProps | InvoiceProps) => {
          alert(`REAGENDAR para: ${item.name}`)
      }
  },
  {
      id: 2,
      title: 'Ignorar',
      icon: CheckIcon,
      action: (item: AppointProps | InvoiceProps) => {
        alert(`IGNORAR para: ${item.name}`)
      }
  }
];
const ITEM_HEIGHT = 48;

interface OptionsMenuProps {
  item: AppointProps | InvoiceProps
  menuType: "appointsConfirm" | "accountPay" | "accountReceive" | "invoiceProfessionals" | "invoicePlans" | "reAppointsReturn" | "reAppointsCancel" 
}

const OptionsMenu: React.FC<OptionsMenuProps> = ({item, menuType}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  let menus;
  switch (menuType) {
    case "accountReceive":
      menus = accountReceiveOptions;
      break;
    case "accountPay":
      menus = accountPayOptions;
      break;
    case "appointsConfirm":
      menus = appointsConfirmOptions;
      break;
    case "invoiceProfessionals":
      menus = invoiceProfessionalsOptions;
      break;
    case "invoicePlans":
        menus = invoicePlansOptions;
        break;  
    case "reAppointsCancel":
      menus = reAppointsCancelOptions;
      break;
    case "reAppointsReturn":
      menus = reAppointsReturnOptions;
      break;
    default:
      menus = undefined; // Ou algum valor padrão
      break;
  }
  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        sx={{
          width: 12,
          height: 20
        }}
      >
        <MoreVertIcon sx={{width: 18, height: 24 }}/>
      </IconButton>

      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: '20ch',
            },
          },
        }}  
      >
        {menus?.map((option) => (
          <MenuItem key={option.id} onClick={() => [ handleClose(), option.action(item)]}>
            {option.title}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export {OptionsMenu}
