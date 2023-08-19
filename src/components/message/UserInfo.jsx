/* eslint-disable react/prop-types */
import {Text} from '@chakra-ui/react'

const UserInfo = ({user})=>{
    return(
        <div className="text-center">
                    <Text fontSize="xl" fontWeight="semibold" color="gray.700">{user.name}</Text>
                    <Text color="gray.500">{user.sex}</Text>
                </div>
    )
}

export default UserInfo