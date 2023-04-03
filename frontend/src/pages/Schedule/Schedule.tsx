import React from 'react'
import { Container, Row, Table, Col } from 'react-bootstrap'
import { useQuery } from '@tanstack/react-query'
import { getSchedule } from '../../api'

export function Schedule() {
    const { data, status, error } = useQuery(['schedule'], getSchedule)
    const headings = ['Match', 'Court', 'Home Team', 'Home Score', 'Away Score', 'Away Team', 'Start Time', 'End Time']

    const markup =
        status === "loading" ? (
            <div>Loading...</div>
        ) : (
            <Table>
                <thead>
                    <tr>
                        {headings.map(title => (<th className='dark-mode-text'>{title}</th>))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((match: any) => {
                        return (
                        <tr key={match[0]}>
                            {
                                match.map((entry: any) => (
                                    <td className="dark-mode-text">{entry}</td>
                                ))
                            }
                        </tr>)})}
                </tbody>
            </Table>
        );
    return (
        <Container fluid className="bg-dark" style={{ minHeight: "90vh" }}>
            <Container className="bg-dark" style={{ minHeight: "90vh" }}>
                <Row>
                    <Col>
                        <h1 className="dark-mode-text">Schedule</h1>
                    </Col>
                </Row>
                <Row>
                    <div className="dark-mode-text">{markup}</div>
                </Row>
            </Container>
        </Container>
    );
}
