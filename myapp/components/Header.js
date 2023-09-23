export default function Header(params) {
    return(
        <header style={{
            backgroundColor: "aquamarine", 
            width: "100%"}}>
                
            <h1>Header</h1> <p>{params.systemUsers.length}</p>
        </header>
    )
}