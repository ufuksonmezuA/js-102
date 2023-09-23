export default function Footer (params) {
    return(
        <footer style={{
            background: "#323232",
            color: "whitesmoke",
            width: "100%"
        }}>
            <h2>Burası footer</h2>
            <p>{params.systemUsers.length}</p>
        </footer>
    )
}