// This component fetches a list of bowlers and then displays them in a table.

import { useState, useEffect } from "react";
import type { bowler } from "./types/bowler";

function BowlerList() {
    // State variable to hold the list of bowlers, initialized as an empty array.
    const [bowlers, setBowlers] = useState<bowler[]>([]);

    // Fetch the list of bowlers from the API when the component mounts and update the state with the retrieved data.
    useEffect(() => {
        const fetchBowler = async () => {
            const response = await fetch('https://localhost:5000/api/BowlingLeague');
            const data = await response.json();
            setBowlers(data);
        };

        fetchBowler();
    }, []);

    return (
        // Display the data from the database
        <section className="table-section">

            <div className="table-wrapper">
                <table className="bowler-table">
                    <thead>
                        <tr>
                            <th>Bowler Name</th>
                            <th>Team Name</th>
                            <th>Bowler Address</th>
                            <th>Bowler City</th>
                            <th>Bowler State</th>
                            <th>Bowler Zip</th>
                            <th>Bowler Phone Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bowlers.map((b) => (
                            <tr key={b.bowlerID}>
                                <td>{b.bowlerFirstName} {b.bowlerMiddleInit} {b.bowlerLastName}</td>
                                <td>{b.team.teamName}</td>
                                <td>{b.bowlerAddress}</td>
                                <td>{b.bowlerCity}</td>
                                <td>{b.bowlerState}</td>
                                <td>{b.bowlerZip}</td>
                                <td>{b.bowlerPhoneNumber}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default BowlerList;