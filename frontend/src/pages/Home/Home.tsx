import React from "react";
import { Button, Container } from "react-bootstrap";
// import { useRouter}

export function Home() {
    return (
        <Container
            fluid
            className="bg-dark d-flex justify-content-center align-items-center flex-column"
            style={{ minHeight: "94vh" }}
        >
            <h1 className="dark-mode-text">Congratulations OQAAB!</h1>
            <img src="/logo.png" alt="logo" style={{ maxWidth: "30vw"}} />
            <div className="d-flex flex-row gap-3">
            <Button
                size="lg"
                href="/schedule"
            >
                Schedule
            </Button>
            <Button
                size="lg"
                href="/standings"
            >
                Standings
            </Button>
            </div>
        </Container>
    );
}
