import { useState, useEffect } from "react";
import type { bowler } from "./types/bowler";

function BowlerList() {
    const [bowlers, setBowlers] = useState<bowler[]>([]);

    useEffect(() => {
        const fetchBowler = async () => {
            const response = await fetch('https://localhost:5000/api/BowlingLeague');
            const data = await response.json();
            setBowlers(data);
        };

        fetchBowler();
    }, []);

    return (
        <section className="table-section">

            <div className="table-wrapper">
                <table className="bowler-table">
                    <thead>
                        <tr>
                            <th>Bowler Name</th>
                            <th>Bowler Address</th>
                            <th>Bowler City</th>
                            <th>Bowler State</th>
                            <th>Bowler Zip</th>
                            <th>Bowler Phone Number</th>
                            <th>Team Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bowlers.map((b) => (
                            <tr key={b.bowlerID}>
                                <td>{b.bowlerFirstName} {b.bowlerMiddleInit} {b.bowlerLastName}</td>
                                <td>{b.bowlerAddress}</td>
                                <td>{b.bowlerCity}</td>
                                <td>{b.bowlerState}</td>
                                <td>{b.bowlerZip}</td>
                                <td>{b.bowlerPhoneNumber}</td>
                                <td>{b.team.teamName}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default BowlerList;