import Nav from "react-bootstrap/Nav";
export default function TOC() {
    return (
        <Nav variant="pills"> 
            <Nav.Item> 
                <Nav.Link href="#/Labs">Default Lab</Nav.Link> 
            </Nav.Item> 
            <Nav.Item> 
                <Nav.Link href="#/Labs/Lab1">Lab 1</Nav.Link>
            </Nav.Item> 
            <Nav.Item> 
                <Nav.Link href="#/Labs/Lab2">Lab 2</Nav.Link> 
            </Nav.Item> 
            <Nav.Item> 
                <Nav.Link href="#/Labs/Lab3">Lab 3</Nav.Link> 
            </Nav.Item> 
            <Nav.Item> 
                <Nav.Link href="#/Kambaz">Kambaz</Nav.Link> 
            </Nav.Item> 
            <Nav.Item> 
                <Nav.Link href="https://github.com/Trivedi-s/webd-react-web-app-cs5610-sp25/tree/a2" id="wd-github" target="_blank" rel="noopener noreferrer">My GitHub</Nav.Link> 
            </Nav.Item> 
        </Nav> 
    );
}