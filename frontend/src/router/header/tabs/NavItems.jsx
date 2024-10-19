import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { NavLink } from "react-router-dom";

function NavItem(name, url) {
    this.name = name;
    this.url = url;
}
const navItems = [
    new NavItem("Home", "/"),
    new NavItem("Articles", "/articles"),
    new NavItem("Authors", "/authors")
];

export default () => {
    return (
        <List>
            {navItems.map(({ name, url }, i) => (
                <NavLink
                    to={url}
                    style={{
                        color: "unset",
                        textDecoration: "unset",
                    }}
                    key={i}
                >
                    {({ isActive }) => (
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText
                                    primary={name}
                                    primaryTypographyProps={{
                                        sx: {
                                            whiteSpace: "nowrap",
                                            textOverflow: "ellipsis",
                                            overflow: "hidden",
                                            fontWeight: isActive && "bold"
                                        }
                                    }}
                                />
                            </ListItemButton>
                        </ListItem>
                    )}
                </NavLink>
            ))}
        </List>
    )
}