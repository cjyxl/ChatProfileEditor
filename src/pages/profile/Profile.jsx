import {useState} from 'react'
import axios from 'axios'
import UserInfoEdit from '../../components/userInfo/UserInfoEdit';
import UserInfoDisplay from '../../components/userInfo/UserInfoDisplay';

const Profile = (props)=> { 
    const userAvatar = '/src/assets/images/userAvatar.png'
    
    const [userInformation,setUserInformation] = useState({
        name:'xl',
        status:'Online',
        avatar:userAvatar,
        email:'2737590436qq.com',
        phone:'123-456-7890',
        qq:'2737590436',
    });

    const [isEditing,setEditing] = useState(false);
    const [onlineStatus,setOnlineStatus] = useState(true);
    // 存储正在编辑的用户信息的草稿
    const [draftUserInfo,setDraftUserInfo] = useState({...userInformation});

    function handleEdit(){
        setEditing(true);
    }

    async function handleSave(){
        // 尝试将 draftUserInfo 提交到服务器
        try{
            // 假设服务器端点为 /api/updateMessage
            const response = await axios.post('/api/updateMessage',draftUserInfo);
            if(response.status === 200 &&response.data.success){
                // 如果成功，则更新 userInfo
                setUserInformation({...draftUserInfo});
                setEditing(false);
            }else{
                alert("Failed to update message. Please try again.");
            }
        }catch(error){
            alert("An errror occurred:" +error.message);
        }
    }

    function handleChange(event){
        const {name,value} = event.target;
        setDraftUserInfo(prevDraft => ({...prevDraft,[name]:value}));
    }

    function handleAvatarChange(event){
        const file = event.target.files[0];
        if(file){
            // 图像预览
            const reader = new FileReader();
            reader.onload = () => {
                setDraftUserInfo(prevDraft => ({...prevDraft,avatar:reader.result}));
            };
            reader.readAsDataURL(file);
        }
    }

    // 切换在线状态
    function toggleOnlineStatus(){
        setOnlineStatus(prevStatus => !prevStatus);
        setDraftUserInfo(prevDraft => ({...prevDraft,status:onlineStatus ? 'Offline' : 'Online'}));
    }

  return (
    <div className="rounded-lg shadow-sm bg-white p-6">
        {isEditing ? (
            <UserInfoEdit 
                draftUserInfo={draftUserInfo}
                handleAvatarChange={handleAvatarChange}
                handleChange={handleChange}
                onlineStatus={onlineStatus}
                toggleOnlineStatus={toggleOnlineStatus}
                handleSave={handleSave}
                {...props} 
            />
        ) : (
            <UserInfoDisplay 
                userInformation={userInformation}
                handleEdit={handleEdit}
                {...props} 
            />
        )}
    </div>
  )
}

export default Profile
