import { useState, useEffect } from "react";
import type { bowler } from "./types/bowler";

function BowlerList() {

    const [bowlers, setBowlers] = useState<bowler[]>([]);

    useEffect(() => {
        const fetchBowler = async () => {
            const response = await fetch('https://localhost:5000/api/BowlingLeague');
            const data = await response.json();
            setBowlers(data);
        }
    
        fetchBowler();
    }, []);

    
    return (
        <>
            <h1>Bowlers and Teams</h1>
            <table>
                <thead>
                    <tr>
                        <td>Bowler First Name</td>
                        <td>Bowler Last Name</td>
                        <td>Bowler Middle Initial</td>
                        <td>Bowler Address</td>
                        <td>Bowler City</td>
                        <td>Bowler State</td>
                        <td>Bowler Zip</td>
                        <td>Bowler Phone Number</td>
                        <td>Team Name</td>
                    </tr>
                </thead>
                <tbody>
                    {bowlers.map((b) => (
                        <tr key={b.bowlerID}>
                            <td>{b.bowlerFirstName}</td>
                            <td>{b.bowlerLastName}</td>
                            <td>{b.bowlerMiddleInit}</td>
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
        </>
    );
}

export default BowlerList;