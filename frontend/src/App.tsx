import { Container, Nav, Navbar } from 'react-bootstrap'
import './App.css'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Schedule, Standings } from './pages';

function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
    <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto" variant="pills">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/schedule">Schedule</Nav.Link>
                    <Nav.Link href="/standings">Standings</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/standings" element={<Standings />} />
        </Routes>
    </BrowserRouter>
    <ReactQueryDevtools />
</QueryClientProvider>
  )
}

export default App
