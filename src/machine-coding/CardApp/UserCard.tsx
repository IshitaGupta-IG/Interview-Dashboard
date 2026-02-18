
type UserCardProps = {
    name: string,
    age: number,
    isOnline: boolean,
    id: number,
    handleRemove : (id:number) => void,
    handleToggle : (id:number) => void
}
function UserCard({ name, age, isOnline, id, handleRemove, handleToggle }: UserCardProps) {

    const handleClick = () => {
        alert("Hello" + name);
    }

    const removeUser = () => {
        handleRemove(id)
    }

    const toggleUser = () => {
        handleToggle(id);
    }

    return (<div style={{
        backgroundColor: "grey", border: "1px solid black", borderRadius: "5px",
        height: "150px", width: "200px", margin: "5px", padding: "5px"
    }}>
        <h5>Name : {name}</h5>
        <h5>Age : {age}</h5>
        <h5> Status : {isOnline ? "Green" : "Red"} </h5>
        <button onClick={handleClick}> Click </button>
        <button onClick={removeUser}> Remove User </button>
        <button onClick={toggleUser}> Toggle State </button>
    </div>)
}

export default UserCard;