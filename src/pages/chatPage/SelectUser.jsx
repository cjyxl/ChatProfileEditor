/* eslint-disable react/prop-types */
import {useState} from 'react'
import { Box, Text, List, ListItem } from '@chakra-ui/react';

const SelectUser = ({users,onSelectUser})=>{
    const [selectedUser,setSelectedUser] = useState(null);

    const handleUserSelect = (user) =>{
        setSelectedUser(user);
        onSelectUser(user);
    }
  return (
    <Box p={4} bgColor="gray.200" borderRadius="md">
        <Text fontSize="lg" fontWeight="semibold" mb={2}>请选择一个聊天对象</Text>
        <List>
            {users.map((user)=>(
                <ListItem
                    key={user.id}
                    onClick={()=>handleUserSelect(user)}
                    cursor="pointer" 
                    p={2} 
                    borderRadius="md" 
                    bgColor={selectedUser && selectedUser.id === user.id ? 'blue.200' : 'transparent'}    
                >
                    {user.name}
                </ListItem>
            ))}
        </List>
    </Box>
  )
}

export default SelectUser
