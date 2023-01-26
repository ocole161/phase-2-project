function AdminAuth({ handlePassword }) {
    
    return (
            <form className="password" onSubmit={handlePassword}>
                <label>Password: </label>
                <input type="password" name="password"></input>
                <input type="submit" value="Submit" />
            </form>
    )
}

export default AdminAuth