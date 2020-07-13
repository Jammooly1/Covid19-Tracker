import React, {useState} from 'react';
import { Button, Dialog, DialogContent, DialogTitle, Typography } from '@material-ui/core';

function Tips() {

    const [tips, setTips] = useState(false)

    function openTips() {
        setTips(true);
    }

    function closeTips() {
        setTips(false);
    }

    const desc = [
        "Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water. Why? Washing your hands with soap and water or using alcohol-based hand rub kills viruses that may be on your hands.", 
        "Maintain at least 1 metre (3 feet) distance between yourself and others. Why? When someone coughs, sneezes, or speaks they spray small liquid droplets from their nose or mouth which may contain virus. If you are too close, you can breathe in the droplets, including the COVID-19 virus if the person has the disease. \n",
        "Boo"];
                        

    return (
        <div>
            <Button onClick={openTips} variant="contained" color="primary">How to Stay Safe</Button>
            <Dialog open={tips} onClose={closeTips}>
                <DialogTitle>How to Stay Safe from Covid-19</DialogTitle>
                <DialogContent> 
                        {desc.map(line => (
                            <Typography color="textSecondary" gutterBottom>{line}</Typography>
                        ))}
                </DialogContent>
            </Dialog>
            <br/>
            <br/>
            <br/>
        </div>
    );
}

export default Tips;