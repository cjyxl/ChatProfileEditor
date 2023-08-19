/* eslint-disable react/prop-types */
import {Flex, Input, Button} from '@chakra-ui/react'

const MessageInput = ({ value, onChange, onSend })=>{
    return(
        <Flex mt={4} align="center">
            <Input 
                value={value} 
                onChange={onChange} 
                placeholder='Type your message here' 
                flex="1" 
                borderRadius="md 0 0 md" 
            />
            <Button 
                onClick={onSend} 
                bg="blue.500" 
                color="white" 
                px={4} 
                py={2} 
                borderRadius="0 md md 0"
                _hover={{ bg: 'blue.600' }}
            >
                Send
            </Button>
        </Flex>
    )
}

export default MessageInput