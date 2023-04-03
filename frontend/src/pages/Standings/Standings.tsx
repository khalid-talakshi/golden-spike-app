import React from "react";

import { Col, Container, Row, Table } from "react-bootstrap";
import { useQuery } from "@tanstack/react-query";
import { getStandings } from "../../api";

export function Standings() {
    const { data, status } = useQuery(["standings"], getStandings, {
        staleTime: 90000,
    });

    const markup =
        status === "loading" ? (
            <div>Loading...</div>
        ) : (
            <Table>
                <thead>
                    <tr>
                        <th className="dark-mode-text">Rank</th>
                        <th className="dark-mode-text">Team</th>
                        <th className="dark-mode-text">Points</th>
                        <th className="dark-mode-text">Wins</th>
                        <th className="dark-mode-text">Ties</th>
                        <th className="dark-mode-text">Losses</th>
                        <th className="dark-mode-text">Point Differential</th>
                        <th className="dark-mode-text">Points For</th>
                        <th className="dark-mode-text">Points Against</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((team: any, index: any) => (
                        <tr key={team[0]}>
                            <td className="dark-mode-text">{index  + 1}</td>
                            <td className="dark-mode-text">{team[0]}</td>
                            <td className="dark-mode-text">{team[1]}</td>
                            <td className="dark-mode-text">{team[2]}</td>
                            <td className="dark-mode-text">{team[3]}</td>
                            <td className="dark-mode-text">{team[4]}</td>
                            <td className="dark-mode-text">{team[5]}</td>
                            <td className="dark-mode-text">{team[6]}</td>
                            <td className="dark-mode-text">{team[7]}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        );

    return (
        <Container fluid className="bg-dark" style={{ minHeight: "90vh" }}>
            <Container className="bg-dark" style={{ minHeight: "94vh" }}>
                <Row>
                    <Col>
                        <h1 className="dark-mode-text">Standings</h1>
                    </Col>
                </Row>
                <Row>
                    <div className="dark-mode-text">{markup}</div>
                </Row>
            </Container>
        </Container>
    );
}
