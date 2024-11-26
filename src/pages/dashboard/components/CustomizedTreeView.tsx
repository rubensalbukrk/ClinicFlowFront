import clsx from "clsx";
import * as React from "react";
import { Link } from "react-router-dom";
import {
  House,
  EventNote,
  ArrowRight,
  Diversity3,
  Description,
  PersonSearch,
  PeopleOutlineRounded,
  ArrowDropDown,
  SettingsSuggest,
  AccountBalanceWalletOutlined,
} from "@mui/icons-material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { SvgIconProps } from "@mui/material/SvgIcon";
import { TreeItem2Icon } from "@mui/x-tree-view/TreeItem2Icon";
import { styled, useTheme, alpha } from "@mui/material/styles";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem2Provider } from "@mui/x-tree-view/TreeItem2Provider";
import {
  useTreeItem2,
  UseTreeItem2Parameters,
} from "@mui/x-tree-view/useTreeItem2";
import {
  TreeItem2Content,
  TreeItem2IconContainer,
  TreeItem2Root,
  TreeItem2GroupTransition,
} from "@mui/x-tree-view/TreeItem2";
import { colors } from "@mui/material";

declare module "react" {
  interface CSSProperties {
    "--tree-view-color"?: string;
    "--tree-view-bg-color"?: string;
  }
}

interface StyledTreeItemProps
  extends Omit<UseTreeItem2Parameters, "rootRef">,
    React.HTMLAttributes<HTMLLIElement> {
  bgColor?: string;
  bgColorForDarkMode?: string;
  color?: string;
  colorForDarkMode?: string;
  labelIcon: React.ElementType<SvgIconProps>;
  labelInfo?: string;
}

const CustomTreeItemRoot = styled(TreeItem2Root)(({ theme }) => ({
  color: theme.palette.text.secondary,
}));

const CustomTreeItemContent = styled(TreeItem2Content)(({ theme }) => ({
  marginBottom: theme.spacing(0.3),
  color: theme.palette.text.secondary,
  borderRadius: theme.spacing(2),
  paddingRight: theme.spacing(1),
  fontWeight: theme.typography.fontWeightMedium,
  "&.expanded": {
    fontWeight: theme.typography.fontWeightRegular,
  },
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
  "&.focused, &.selected, &.selected.focused": {
    backgroundColor: `var(--tree-view-bg-color, ${theme.palette.action.selected})`,
    color: "var(--tree-view-color)",
  },
}));

const CustomTreeItemIconContainer = styled(TreeItem2IconContainer)(
  ({ theme }) => ({
    marginRight: theme.spacing(0),
  })
);

const CustomTreeItemGroupTransition = styled(TreeItem2GroupTransition)(
  ({ theme }) => ({
    marginLeft: 0,
    [`& .content`]: {
      paddingLeft: theme.spacing(2),
    },
  })
);

const CustomTreeItem = React.forwardRef(function CustomTreeItem(
  props: StyledTreeItemProps,
  ref: React.Ref<HTMLLIElement>
) {
  const theme = useTheme();
  const {
    id,
    itemId,
    label,
    disabled,
    children,
    bgColor,
    color,
    labelIcon: LabelIcon,
    labelInfo,
    colorForDarkMode,
    bgColorForDarkMode,
    ...other
  } = props;

  const {
    getRootProps,
    getContentProps,
    getIconContainerProps,
    getLabelProps,
    getGroupTransitionProps,
    status,
  } = useTreeItem2({ id, itemId, children, label, disabled, rootRef: ref });

  const style = {
    "--tree-view-color":
      theme.palette.mode !== "dark" ? color : colorForDarkMode,
    "--tree-view-bg-color":
      theme.palette.mode !== "dark" ? bgColor : bgColorForDarkMode,
  };

  return (
    <TreeItem2Provider itemId={itemId}>
      <CustomTreeItemRoot {...getRootProps({ ...other, style })}>
        <CustomTreeItemContent
          {...getContentProps({
            className: clsx("content", {
              expanded: status.expanded,
              selected: status.selected,
              focused: status.focused,
            }),
          })}
        >
          <CustomTreeItemIconContainer {...getIconContainerProps()}>
            <TreeItem2Icon status={status} />
          </CustomTreeItemIconContainer>
          <Box
            sx={{
              display: "flex",
              flexGrow: 1,
              alignItems: "center",
              p: 0.5,
              pr: 0,
            }}
          >
            <Box component={LabelIcon} color="inherit" sx={{ mr: 1 }} />
            <Typography
              {...getLabelProps({
                variant: "body2",
                sx: { display: "flex", fontWeight: "inherit", flexGrow: 1 },
              })}
            />
            <Typography variant="caption" color="inherit">
              {labelInfo}
            </Typography>
          </Box>
        </CustomTreeItemContent>
        {children && (
          <CustomTreeItemGroupTransition {...getGroupTransitionProps()} />
        )}
      </CustomTreeItemRoot>
    </TreeItem2Provider>
  );
});

function EndIcon() {
  return <div style={{ width: 24 }} />;
}

const MenuItems = [
  {
    id: 1,
    path: "intelligence",
    icon: House,
    label: "Inteligência",
  },
  {
    id: 2,
    path: "appoints",
    icon: EventNote,
    label: "Agendamentos",
  },
  {
    id: 3,
    path: "pacients",
    icon: PeopleOutlineRounded,
    label: "Pacientes",
  },
  {
    id: 4,
    path: "finance",
    icon: AccountBalanceWalletOutlined,
    label: "Financeiro",
  },
  {
    id: 5,
    path: "anamnesia",
    icon: PersonSearch,
    label: "Anamnesia",
  },
  {
    id: 6,
    path: "teams",
    icon: Diversity3,
    label: "Equipes",
  },
  {
    id: 7,
    path: "plans",
    icon: Description,
    label: "Planos",
  },
];



export default function GmailTreeView() {
  return (
    <SimpleTreeView
      aria-label="gmail"
      defaultExpandedItems={["3"]}
      defaultSelectedItems="2"
      slots={{
        expandIcon: ArrowRight,
        collapseIcon: ArrowDropDown,
        endIcon: EndIcon,
      }}
      sx={{ flexGrow: 1, maxWidth: 400 }}
    >
      {MenuItems?.filter((item) => item.id < 5)
        .map((item) => {
          return (
            <Link to={item.path}>
            <CustomTreeItem
              itemId={item.label}
              label={item.label}
              labelIcon={item.icon}
              labelInfo=""
              bgColor={alpha(colors.green[100], 0.6)}
              colorForDarkMode={colors.green[400]}
              bgColorForDarkMode={alpha("#64ff6a", 0.1)}
            />
            </Link>
          );
        })}
      <CustomTreeItem
        itemId="5"
        label="Ajustes"
        labelIcon={SettingsSuggest}
        color={colors.green[800]}
        bgColor={alpha(colors.green[100], 0.6)}
        colorForDarkMode={colors.green[400]}
        bgColorForDarkMode={alpha("#64ff6a", 0.1)}
      >
        {MenuItems?.filter((item) => item.id > 4)
        .map((item) => {
          return (
            <Link to={item.path}>
            <CustomTreeItem
              itemId={item.label}
              label={item.label}
              labelIcon={item.icon}
              labelInfo=""
              bgColor={alpha(colors.green[100], 0.6)}
              colorForDarkMode={colors.green[400]}
              bgColorForDarkMode={alpha("#64ff6a", 0.1)}
            />
            </Link>
          );
        })}
      </CustomTreeItem>
    </SimpleTreeView>
  );
}
