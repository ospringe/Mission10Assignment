// This file defines the TypeScript type for a bowler, which includes their personal information and the team they belong to.

export type bowler = {
    bowlerID: number;
    bowlerLastName: string;
    bowlerFirstName: string;
    bowlerMiddleInit: string;
    bowlerAddress: string;
    bowlerCity: string;
    bowlerState: string;
    bowlerZip: number;
    bowlerPhoneNumber: string;
    teamID: number;
    team: {
        teamID: number;
        teamName: string;
    };
};