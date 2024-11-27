import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CheckIcon from '@mui/icons-material/Check';
import { MenuItem } from '@mui/material';
import { ItemListAppointsConfirmProps } from 'src/pages/dashboard/pages/inteligence/types';

const options = [
    {
        id: 1,
        title: 'Aceitar',
        icon: CheckIcon,
        action: (appoint: ItemListAppointsConfirmProps) => {
            alert(`AÇÃO para: ${appoint.name}`)
        }
    },
    {
        id: 2,
        title: 'Recusar',
        icon: CheckIcon,
        action: () => alert(`AÇÃO para RECUSAR`)
    },
    {
        id: 3,
        title: 'Ver mais',
        icon: CheckIcon,
        action: () => alert(`AÇÃO para: VER MAIS}`)
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

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
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
        {options.map((option) => (
          <MenuItem key={option.id} onClick={() => [ handleClose(), option.action(props.appoint)]}>
            {option.title}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export {OptionsMenu}
