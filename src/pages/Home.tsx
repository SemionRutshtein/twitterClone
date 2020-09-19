import React from "react";
import {Container, createStyles, Grid, InputBase, Paper, Theme, Typography, withStyles} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {grey} from "@material-ui/core/colors";
import {Tweet} from "../components/Tweet";
import {SideMenu} from "../components/SideMenu";


export const useHomeStyles = makeStyles((theme: Theme) => ({
    wrapper: {
      weight: '100vh',
    },
    logo: {
      margin: '10px 0'
    },
    logoIcon: {
     fontSize: 36,
    },
    sideMenuList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        width:230
    },
    sideMenuListItem: {
        cursor: 'pointer',
        '&:hover': {
            '& div': {
                backgroundColor: 'rgba(29, 161, 242, 0.1)',
                '& h6': {
                    color: theme.palette.primary.main,
                },
                '& svg path': {
                    fill: theme.palette.primary.main,
                }
            }
        },
        '& div': {
           display: 'inline-flex',
           alignItems: 'center',
           position: 'relative',
           padding: '0 25px 0 20px',
           borderRadius: 30,
           height: 50,
           marginBottom: 15,
           transition: 'background-color 0.1s ease-in-out',
       }
    },
    sideMenuListItemLabel: {
        fontWeight: 700,
        fontSize: 20,
        marginLeft: 15,
    },
    sideMenuListItemLabelIcon: {
        fontSize: 28,
        marginLeft: -5,
    },
    sideMenuTweetButton: {
        padding: theme.spacing(3.2),
        marginTop: theme.spacing(3),
    },
    tweetsWrapper: {
        borderRadius: 0,
        height: '100%',
        borderTop: '0',
        borderBottom: '0',
    },
    tweetsHeader: {
        borderTop: '0',
        bordLeft: '0',
        borderRight: '0',
        borderRadius: '0',
        padding: '10px 15px',
        '& h6': {
            fontWeight: 800,
        }
    },
    tweet: {
        cursor: 'pointer',
        paddingTop: 15,
        paddingLeft: 20,
        '&:hover' : {
            backgroundColor: 'rgb(245, 248, 250)'

    }
    },
    tweetFooter: {
        display: 'flex',
        position: 'relative',
        left: -13,
        justifyContent: 'space-between',
        width: 450,

    },
    tweetUserName: {
        color: grey[500],
    },
    tweetWrapper: {

    },
    tweetAvatar: {
        width: theme.spacing(5),
        height: theme.spacing(5)
    }

}));
const SearchTextField = withStyles(() =>
    createStyles({
        input: {
            borderRadius: 30,
            backgroundColor: '#E6ECF0',
            height: 45,
            padding: 0,

        }
    })
)(InputBase);

export const Home = () => {
    const classes = useHomeStyles();

    return (
        <Container className={classes.wrapper} maxWidth="lg">
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <SideMenu  classes={classes}/>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.tweetsWrapper} variant="outlined">
                        <Paper className={classes.tweetsHeader} variant="outlined">
                            <Typography variant="h6">Главная</Typography>
                        </Paper>
                        {
                            [...new Array(20).fill( <Tweet
                                _id =""
                                text ="У вас в подъезде есть емкость для сбора батареек? Мне кажется, к ней нужно ещё добавить емкость для сбора нераскрывшихся фисташек."
                                user={{
                                    fullname: 'Senja',
                                    username: '0Senja',
                                    avatarUrl: 'data:image/jpeg;base64,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'

                                }}
                                classes ={classes}
                            />)]
                        }
                         </Paper>

                </Grid>
                <Grid item xs={3}>
                    <SearchTextField fullWidth placeholder="Поиск по твиттере" />
                </Grid>

            </Grid>
        </Container>
    )
}
