import { useEffect, useState } from "react";
import {getAPI} from '../common/DataProvider'
import {Button, Card, Text, Loader} from '@aws-amplify/ui-react'


const NavOrders = () => {
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [text, setText] = useState('')

    // useEffect(() => {
    //     getOrders();
    // }, [])

    const getOrders = async () => {
        setVisible(true)
        setLoading(true)
        const res = await getAPI('/ddb')
        console.log('DDB: ', res)
        if (res.length === 0) return
        // order array by timestamp in descending order
        const orders = res.toSorted((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
        console.log('SORTED: ', orders)
        setText(orders[0])
        setLoading(false)
    }

    return (
        <div>
            {/* <Button variation='primary' size='small' onClick={()=> setVisible(true)} >Orders</Button> */}
            { visible ?
            < div style={{position: "absolute", top: '10px', right: '10px'}} >
                <Card onClick={()=> setVisible(false)}>
                    { loading ? <Loader variation="linear"/> : null }
                    <Text>{`ORDER: ${text.id} `}</Text>
                    <Text>{`DATE: ${text.timestamp} `}</Text>
                    <Text>{`PRODUCT: ${text.product}      SIZE: ${text.size}`}</Text>
                    <Text>{`STORE: ${text.store}      TOTAL: ${text.total}`}</Text>
                </Card>
                {/* <button style={{position: "absolute", top: '-15px', right: '-8px'}} onClick={()=> setVisible(false)} >X</button> */}
            </div>
            : 
            <Button variation='primary' size='small' onClick={()=> getOrders()} >
                <svg
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    height="1.5em"
                    width="1.5em"
                    >
                    <path d="M483.82 32.45a16.28 16.28 0 00-11.23 1.37L448 46.1l-24.8-12.4a16 16 0 00-14.31 0l-25.11 12.41L359 33.7a16 16 0 00-14.36 0L320 46.07l-24.45-12.34a16 16 0 00-14.35-.06L256 46.12l-24.8-12.43a16.05 16.05 0 00-14.33 0L192 46.1l-24.84-12.41a16 16 0 00-19.36 3.94 16.25 16.25 0 00-3.8 10.65V288l.05.05H336a32 32 0 0132 32V424c0 30.93 33.07 56 64 56h12a52 52 0 0052-52V48a16 16 0 00-12.18-15.55zM416 240H288.5c-8.64 0-16.1-6.64-16.48-15.28A16 16 0 01288 208h127.5c8.64 0 16.1 6.64 16.48 15.28A16 16 0 01416 240zm0-80H224.5c-8.64 0-16.1-6.64-16.48-15.28A16 16 0 01224 128h191.5c8.64 0 16.1 6.64 16.48 15.28A16 16 0 01416 160z" />
                    <path d="M336 424v-88a16 16 0 00-16-16H48a32.1 32.1 0 00-32 32.05c0 50.55 5.78 71.57 14.46 87.57C45.19 466.79 71.86 480 112 480h245.68a4 4 0 002.85-6.81C351.07 463.7 336 451 336 424z" />
                </svg>
            </Button>
            }
        </div>
    )
}

export default NavOrders;