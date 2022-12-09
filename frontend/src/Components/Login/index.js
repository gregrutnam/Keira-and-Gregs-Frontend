export default function Login(){
    return <div className="login-section">
    <form action="http://localhost:3001/login">
        <input type="submit" value="Login to Spotify" />
    </form>
    </div>
}