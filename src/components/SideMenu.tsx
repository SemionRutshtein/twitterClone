import React from "react";
import TwitterIcon from '@material-ui/icons/Twitter';
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import MessageIcon from '@material-ui/icons/EmailOutlined';
import MarkIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ListIcon from '@material-ui/icons/ListAlt';
import PersonIcon from '@material-ui/icons/Person';
import {Button, Typography} from "@material-ui/core";
import {useHomeStyles} from "../pages/Home";

interface SideMenuProps {
    classes: ReturnType<typeof useHomeStyles>;
}

export const SideMenu: React.FC<SideMenuProps> = ({classes}: SideMenuProps): React.ReactElement => {
    return  (
        <ul className={classes.sideMenuList}>
            <li className={classes.sideMenuListItem}>
                <IconButton className={classes.logo} aria-label="delete" color="primary">
                    <TwitterIcon className={classes.logoIcon}/>
                </IconButton>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <SearchIcon className={classes.sideMenuListItemLabelIcon}/>
                    <Typography
                        className={classes.sideMenuListItemLabel}
                        variant="h6">
                        Поиск
                    </Typography>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <NotificationsIcon className={classes.sideMenuListItemLabelIcon}/>
                    <Typography
                        className={classes.sideMenuListItemLabel}
                        variant="h6">
                        Уведомления
                    </Typography>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <MessageIcon className={classes.sideMenuListItemLabelIcon}/>
                    <Typography
                        className={classes.sideMenuListItemLabel}
                        variant="h6">
                        Сообщения
                    </Typography>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
               <div>
                    <MarkIcon className={classes.sideMenuListItemLabelIcon}/>
                   <Typography
                       className={classes.sideMenuListItemLabel}
                       variant="h6">
                       Закладки
                   </Typography>
               </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <ListIcon className={classes.sideMenuListItemLabelIcon}/>
                    <Typography
                        className={classes.sideMenuListItemLabel}
                        variant="h6">
                        Список
                    </Typography>
                </div>

            </li>
            <li className={classes.sideMenuListItem}>
               <div>
                   <PersonIcon className={classes.sideMenuListItemLabelIcon}/>
                   <Typography
                       className={classes.sideMenuListItemLabel}
                       variant="h6">
                       Профиль
                   </Typography>
               </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <Button className={classes.sideMenuTweetButton}
                        variant="contained"
                        color="primary"
                        fullWidth>
                    Твитнуть
                </Button>
            </li>

        </ul>
    )
}
