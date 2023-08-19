/* eslint-disable react/no-unknown-property */
import {useState} from 'react'
import {Box} from '@chakra-ui/react'
import UserInfo from '../../components/message/UserInfo'
import SelectUser from './selectUser';
import MessageList from '../../components/message/MessageList'
import MessageInput from '../../components/message/MessageInput'

const ChatInterface = ()=>{
  
    const [selectedUser, setSelectedUser] = useState(null);
    const [messages,setMessages] = useState([]);
    const [newMessage,setNewMessage] = useState("");
 
    const users = [
        {id:1,name:'xx',sex:'女'},
        {id:2,name:'ll',sex:'男'},
    ]

    const handleSelectUser = (user)=>{
        setSelectedUser(user);
    }

    function handleNewMessageChange(event){
        setNewMessage(event.target.value);
    }

    function handleSendMessage(){
        // 将消息发送到后端
        if(newMessage.trim()){
            setMessages(preMessages => [...preMessages, {me:true,content:newMessage.trim()}]);
            setNewMessage("");
        } 
    }

  return (
    <Box p={6} maxW="md" mx="auto" bg="gray.50" borderRadius="xl" shadow="md" spacing={4}>
        {selectedUser ? ( <UserInfo user={selectedUser}/> ) : ( <SelectUser users={users} onSelectUser={handleSelectUser} /> )}
        <MessageList messages={messages} />
        <MessageInput value={newMessage} onChange={handleNewMessageChange} onSend={handleSendMessage} />
    </Box>
  )
}

export default ChatInterface
