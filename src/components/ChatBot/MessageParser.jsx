import React from 'react';

const MessageParser = ({ children, actions }) => {

    const parse = (msg) => {
        const message = msg.toLowerCase()
        console.log('USER: ', message)

        actions.handleBotApi(msg)

        // if (message.includes('hello')) {
        //     actions.handleHello()
        // }

        // if (message.includes('dog')) {
        //     actions.handleDog()
        // }

        // else {
        //     actions.handleBotApi(msg)
        // }
    };

    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    parse: parse,
                    actions: {},
                });
            })}
        </div>
    );
};

export default MessageParser;