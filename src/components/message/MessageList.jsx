/* eslint-disable react/prop-types */
import {Box} from '@chakra-ui/react'

const MessageList = ({ messages }) =>{
    return(
        <Box border="1px" borderColor="gray.200" p={4} borderRadius="md" spacing={4}>
            {
                messages.map((message,index)=>{
                    <div key={index} className={`text-${message.me ? 'right' : 'left'}`}>
                        <Box 
                            display="inline-block" 
                            p={2} 
                            borderRadius="md" 
                            bg={message.me ? 'blue.200' : 'gray.200'}
                        >
                            {message.content}
                        </Box>
                    </div>
                })
            }
        </Box >
    )
}

export default MessageList