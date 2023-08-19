/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {Button,Input,Box,FormLabel} from "@chakra-ui/react"

const UserInfoEdit = ({draftUserInfo, handleAvatarChange, handleChange, onlineStatus, toggleOnlineStatus, handleSave})=>{
    return(
        <Box>
            <div className="mb-4">
                <FormLabel >Avatar:</FormLabel>
                <Input type="file" name="avatar" onChange={handleAvatarChange} />
            </div>
            <div className="mb-4">
                <FormLabel>Name:</FormLabel>
                <Input type="text" name="name" value={draftUserInfo?.name} onChange={handleChange} />
            </div>
            <div className="mb-4 flex items-center justify-between">
                <FormLabel fontSize="sm">Status: {onlineStatus ? 'Online' : 'Offline'}</FormLabel>
                <Button onClick={toggleOnlineStatus} colorScheme="blue">Toggle Status</Button>
            </div>
            <div className="mb-4">
                <FormLabel>Email:</FormLabel>
                <Input type="text" name="email" value={draftUserInfo.email} onChange={handleChange} />
            </div>
            <div className="mb-4">
                <FormLabel>Phone:</FormLabel>
                <Input type="text" name="phone" value={draftUserInfo.phone} onChange={handleChange} />
            </div>
            <div className="mb-4">
                <FormLabel >QQ:</FormLabel>
                <Input type="text" name="qq" value={draftUserInfo.qq} onChange={handleChange} />
            </div>
            <Button 
                onClick={handleSave} 
                mt={4} 
                w="full" 
                colorScheme="purple"
            >
                Save
            </Button>
        </Box>
    )
}

export default UserInfoEdit