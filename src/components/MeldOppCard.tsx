import React, { FormEvent } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { FormControl, InputLabel, Select, MenuItem, Input } from '@material-ui/core';


type Klasse = {
    id: number,
    klassekode: string,
    navn: string,
    status: string,
    endretDatoTid?: Date
}

type Props = { klasser: Array<Klasse> };

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
        },
        card: {
            width: 350,
            padding: 0,
            borderRadius: 0,
        },
        title: {
            fontWeight: 500,
            color: '#444F55',
            textAlign: "center",
            padding: "25px 0px 7px"
        },
        formControl: {
            paddingBottom: 8

        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
        align: {
            display: "block",
            textAlign: "center",
            padding: "6px 0px 15px"
        },
        hr: {
            borderTop: '1px solid #dadada',
        },
        content: {
            padding: 30
        }
    }),
);

const MeldOppCard: React.SFC<Props> = (props) => {

    const classes = useStyles();

    const [state, setValues] = React.useState({
        klasse: '',
        bruker: '',
    });

    function handleChange(event: React.ChangeEvent<{ name?: string; value: unknown }>) {

        if (event.target.name) {
            setValues({ ...state, [event.target.name]: event.target.value });
        }
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log(state)
    }

    function handleReset(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log('reset');

        

    }

    return (
        <div className="App">
            <Card className={classes.card}>
                <Typography className={classes.title} variant="h4" component="h1"> Meld opp kandidat</Typography>
                <hr className={classes.hr} />
                <form onSubmit={handleSubmit} onReset={handleReset}>
                    <CardContent className={classes.content}>
                        <FormControl fullWidth className={classes.formControl}>
                            <InputLabel shrink htmlFor="klasse-helper">Klasse</InputLabel>
                            <Select
                                fullWidth
                                value={state.klasse}
                                onChange={handleChange}
                                input={<Input name="klasse" id="klasse-helper" />}
                                displayEmpty
                            >
                                <MenuItem value="">
                                    <em>Ikke valgt</em>
                                </MenuItem>
                                {props.klasser.map((klasse: Klasse, index) => {
                                    return <MenuItem key={index} value={klasse.klassekode}>{klasse.navn} ({klasse.klassekode})</MenuItem>;
                                })}
                            </Select>
                        </FormControl>
                        <FormControl fullWidth className={classes.formControl}>
                            <TextField
                                id="standard-full-width"
                                label="Kandidat ID"
                                placeholder="Skriv inn ID"
                                fullWidth
                                margin="normal"
                                name="bruker"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onChange={handleChange}
                                value={state.bruker}
                            />
                        </FormControl>
                    </CardContent>
                    <hr className={classes.hr} />
                    <CardActions className={classes.align}>
                        <Button variant="contained" type="reset" color="secondary">Avbryt</Button>
                        <Button variant="contained" type="submit" color="primary">Meld opp</Button>
                    </CardActions>
                </form>
            </Card>
        </div>
    );
}

export default MeldOppCard;
