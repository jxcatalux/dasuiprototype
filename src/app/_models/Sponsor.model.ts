export class Debtor {
    constructor(
        public sponsorId: number,
        public lastname: string,
        public firstname: string,
        public dob: string,
        public sponsorImmNo: string,
        public acctStatus: string,
        public referralId: number,
        public memberId: number,
        public memberLName: string,
        public memberFName: string,
        public memberdob: string,
        public cosponsorId?: number,
        public cosponsorLName?: string,
        public cosponsorFName?: string,
        public cosponsorDOB?: string ) { }

}
