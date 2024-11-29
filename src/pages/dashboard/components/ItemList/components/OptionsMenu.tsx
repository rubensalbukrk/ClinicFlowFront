import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CheckIcon from '@mui/icons-material/Check';
import { MenuItem } from '@mui/material';
import { ItemListProps } from 'src/pages/dashboard/pages/inteligence/types';


const accountReceiveOptions = [
  {
      id: 1,
      title: 'Confirmar',
      icon: CheckIcon,
      action: (appoint: ItemListProps) => {
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
        action: (appoint: ItemListProps) => {
            alert(`PAGAR para ${appoint.name}`)
        }
    },
    {
        id: 2,
        title: 'Cancelar',
        icon: CheckIcon,
        action: (appoint: ItemListProps) => alert(`CANCELAR PAGAMENTO DE ${appoint.name}`)
    }
];
const appointsConfirmOptions = [
  {
      id: 1,
      title: 'Confirmar',
      icon: CheckIcon,
      action: (appoint: ItemListProps) => {
          alert(`CONFIRMAR para: ${appoint.name}`)
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
      action: (appoint: ItemListProps) => {
          alert(`REAGENDAR para: ${appoint.name}`)
      }
  },
  {
      id: 2,
      title: 'Excluir',
      icon: CheckIcon,
      action: (appoint: ItemListProps) => {
        alert(`EXCLUIR para: ${appoint.name}`)
      }
  }
];
const reAppointsCancelOptions = [
  {
      id: 1,
      title: 'Reagendar',
      icon: CheckIcon,
      action: (appoint: ItemListProps) => {
          alert(`REAGENDAR para: ${appoint.name}`)
      }
  },
  {
      id: 2,
      title: 'Ignorar',
      icon: CheckIcon,
      action: (appoint: ItemListProps) => {
        alert(`IGNORAR para: ${appoint.name}`)
      }
  }
];


const ITEM_HEIGHT = 48;

export default function OptionsMenu(props: any) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  let menus;
  switch (props.menuType) {
    case "accountReceive":
      menus = accountReceiveOptions;
      break;
    case "accountPay":
      menus = accountPayOptions;
      break;
    case "appointsConfirm":
      menus = appointsConfirmOptions;
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
          <MenuItem key={option.id} onClick={() => [ handleClose(), option.action(props?.appoint)]}>
            {option.title}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export {OptionsMenu}
