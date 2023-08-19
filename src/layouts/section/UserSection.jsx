const UserSection = () =>{
    return(
      <section className="flex mb-6">
        <img 
          src="/src/assets/images/userAvatar.png" 
          alt="UserAvatar" 
          className="w-48 h-48 object-cover rounded-md shadow-sm"  
        />
        <div className="ml-6 flex-1"> 
          <div className="text-lg font-semibold text-slate-500 mb-4">
            Lsland
          </div>
          <p className="text-sm font-medium text-slate-700">
            在谷底也要开花,在海底也要望月!
          </p>
        </div>
      </section>
    )
}
export default UserSection