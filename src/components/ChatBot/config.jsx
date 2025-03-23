// in config.js
import { createChatBotMessage } from 'react-chatbot-kit';
import DogPicture from './widgets/DogPicture';

const botName = 'Heritage Bot';

const config = {
  initialMessages: [createChatBotMessage(`Hi! I'm ${botName}`)],
  botName: botName,
  widgets: [
    {
        widgetName: 'dogPicture',
        widgetFunc: (props) => <DogPicture {...props} />,
        props: {},

    }
  ],
  customStyles: {
    // // Overrides the chatbot message styles
    // botMessageBox: {
    //   backgroundColor: '#376B7E',
    // },
    // // Overrides the chat button styles
    // chatButton: {
    //   backgroundColor: '#5ccc9d',
    // },
  },
};

export default config;