import React, { useState } from 'react'
import { Grid, Button, TextField } from '@material-ui/core/'
import styles from '../styles/Contribute.module.scss'
import Head from 'next/head'
import axios from 'axios'

async function handleSubmit(title: string, message: string) {
    const payload = JSON.stringify({
        title: title,
        message: message,
    })
    try {
        const data = await axios.post(`http://localhost:8080/api/questions`, payload, {
            headers: { 'Content-Type': 'application/json' },
        })
        window.location.href = '/contribute'
        console.log(data, 'Question has been added')
    } catch (error) {
        console.log('Error while adding question to database' + error)
    }
}

const Contribute = () => {
    const [title, setTitle] = useState('')
    const [message, setMessage] = useState('')
    return (
        <>
            <Head>
                <title>Drona | Contribute</title>
                <link rel="manifest" href="/manifest.json" />
                <link rel="apple-touch-icon" href="/256x256.png"></link>
                <meta name="theme-color" content="#fff" />
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/256x256.png" />
            </Head>
            <div className={styles.container}>
                <Grid container className={styles.card}>
                    <Grid item xs={12} sm={12} md={7}>
                        <img
                            src="https://res.cloudinary.com/dguy8qpzi/image/upload/v1635971918/contribute-img-drona_hjcqbi.png"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </Grid>
                    <Grid container item xs={12} sm={12} md={5} alignItems="center" direction="column" style={{ padding: 10 }}>
                        <div className={styles.form}>
                            <div className={styles.name}>DRONA</div>

                            <div className={styles.heading}>Be the senior you wanted as a junior</div>

                            <TextField
                                id="outlined-basic"
                                variant="outlined"
                                label="Title"
                                margin="normal"
                                type="string"
                                className={styles.formText}
                                onChange={e => setTitle(e.target.value)}
                            />

                            <TextField
                                id="outlined-basic"
                                multiline
                                variant="outlined"
                                label="Problem Statement"
                                margin="normal"
                                type="string"
                                className={styles.formText}
                                onChange={e => setMessage(e.target.value)}
                            />
                            <br />
                            <Button
                                style={{ backgroundColor: '#000', color: '#FFFFFF', fontWeight: 800 }}
                                onClick={() => handleSubmit(title, message)}
                            >
                                Submit
                            </Button>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default Contribute
