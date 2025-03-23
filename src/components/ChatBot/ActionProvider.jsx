import React from 'react';
import { postAPI, getAPI } from '../../common/DataProvider';
import Loader from './Loader';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

    const handleBotApi = async (usrMsg) => {
        // Loading before API call
        const loading = createChatBotMessage(<Loader />)

        setState((prev) => ({ ...prev, messages: [...prev.messages, loading], }))
        console.log('BOT API POST: ', usrMsg)
        const botRes = await postAPI('/message', usrMsg)
        console.log('BOT RES: ', botRes)
        // const parseRes = JSON.parse(botRes)
        // Stop Loading after call is returned

        const botMessage = createChatBotMessage(botRes.bot)
        setState((prev) => {
            // Remove Loading
            const newPrevMsg = prev.messages.slice(0, -1)
            return { ...prev, messages: [...newPrevMsg, botMessage], }
        })
    }

    const handleHello = () => {
        const botMessage = createChatBotMessage('Hi! Im your AI Cultural Heritage Assistant. I can help you explore history, traditions, landmarks, and more. What would you like to learn about today?');

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };

    const handleDog = () => {
        const botMessage = createChatBotMessage("Here's a nice dog picture for you!", { widget: 'dogPicture', });
        setState((prev) => ({ ...prev, messages: [...prev.messages, botMessage], }))
    };

    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    actions: {
                        handleHello,
                        handleDog,
                        handleBotApi
                    },
                });
            })}
        </div>
    );
};

export default ActionProvider;