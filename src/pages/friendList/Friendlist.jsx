/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {useState} from 'react'
import {Button,Text,Circle,Box,List} from "@chakra-ui/react"

 function Friend({name,avatar,status}) {
    const [onlineStatus, setOnlineStatus] = useState(status);
    
    function toggleOnlineStatus() {
        setOnlineStatus(prevStatus => !prevStatus);
    }

  return (
    <li className="flex items-center mb-4">
      <img src={avatar} alt="Friend Avatar" className="w-10 h-10 mr-4 rounded-full" />
      <Text mr="4">{name}</Text>
      <Circle size="10px" bg={onlineStatus ? 'green.500' : 'red.500'} mr="4"></Circle>
      <Button onClick={toggleOnlineStatus} colorScheme="blue" size="sm">
        Toggle Status
      </Button>
    </li>
  )
}

export default function Friendlist() {
    const avatar1 = "/src/assets/images/avatar1.jpg"

    const friends = [
        {name:'ll',avatar:avatar1,status:true},
    ];

    const [hasNewMessage, setHasNewMessage] = useState(false);

    function receiveNewMessage(){
        // 当接收到一个新消息或事件时，会调用此函数
        setHasNewMessage(true);
    }
    function viewMessages(){
      setHasNewMessage(false);
    }

  return (
    <Box p="4">
      <h3 className="text-xl mb-4">Contacts 
        {hasNewMessage && (
          <Text onClick={viewMessages} color="red.500" cursor="pointer">
            New Message! (Click to view)
          </Text>
        )}
      </h3>
      <List>
        {friends.map((friend, index) => (
          <Friend key={index} {...friend} />
        ))}
      </List>
    </Box>
  )
}

