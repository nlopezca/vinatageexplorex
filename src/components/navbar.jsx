import { useState } from "react";
import { View, Flex, Button, Image, Divider, Heading, Link, Loader } from '@aws-amplify/ui-react';
import { signOut } from 'aws-amplify/auth';
import logo from '../assets/logo.png'
import NavOrders from "./navbar-orders";




function Navbar() {
    const [loading, setLoading] = useState(false);

    const userSignout = async e => {
        try {
            setLoading(true)
            await signOut();
            setLoading(false)
        } catch (error) {
          console.log('error signing out: ', error);
        }
    }

    return (
        <View>
            <Flex margin={'1em'} height="2em">
                <Flex flex={1} justifyContent={'flex-start'} alignItems={'center'}>
                    {/* <Image height="3em" backgroundColor={'rgba(255, 255, 255, 0.8)'} padding={'3px'} borderRadius={'5px'} src={logo} /> */}
                    <Image height="3.5em" src={logo} />
                    {/* <Heading color={'white'}  level={4} fontWeight='bold'>Starbucks</Heading> */}
                </Flex>
                <Flex flex={1} justifyContent={'center'} alignItems={'center'} gap={'2.5em'}>
                    <h1 style={{ 
        color: 'white', 
        fontWeight: 'bold', 
        fontSize: '2em',  // Adjust as needed
        textAlign: 'center' 
    }}>
        VINTAGE EXPLOREX
    </h1>
                </Flex>
                <Flex flex={1} justifyContent={'flex-end'} alignItems={'center'}>
                    <NavOrders />
                    <Button variation='primary' size="small" onClick={e => userSignout(e)}>
                        {loading ? <Loader />
                        :
                        <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            height="1.5em"
                            width="1.5em"
                            >
                            <path d="M12 4a4 4 0 014 4 4 4 0 01-4 4 4 4 0 01-4-4 4 4 0 014-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4z" />
                        </svg>
                        }
                    </Button>
                </Flex>
            </Flex>
            {/* <Divider orientation="horizontal" /> */}
        </View>
    )
}

export default Navbar;