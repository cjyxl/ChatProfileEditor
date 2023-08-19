/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {Button,Text,Box} from "@chakra-ui/react"

const UserInfoDisplay = ({userInformation,handleEdit})=>{
    return (
        <Box textAlign="center">
            <img 
                src={userInformation.avatar} 
                alt="User Avatar" 
                className="w-24 h-24 mx-auto mb-4 rounded-full border-2 border-gray-300"
            />
            <Text fontSize="xl" mb={2} color="purple.700" fontWeight="semibold">
                {userInformation.name}
            </Text>
            <Text color="purple.400" mb={2}>昵称：{userInformation.status}</Text>
            <Text color="gray.600" mb={2}>邮箱：{userInformation.email}</Text>
            <Text color="gray.600" mb={2}>号码：{userInformation.phone}</Text>
            <Text color="gray.600" mb={4}>账号：{userInformation.qq}</Text>
            <Button 
                onClick={handleEdit} 
                colorScheme="purple" 
                w="full"
            >
                Edit
            </Button>
        </Box>
    )
}

export default UserInfoDisplay