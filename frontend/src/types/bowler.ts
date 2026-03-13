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