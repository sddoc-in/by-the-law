export default interface FL130a {
    PetitionerPlaintiff: string;
    RespondentDefendant: string;
    OtherParent: string;
    CaseNumber: string;
    ThisWaiverIsConditionedAsFollws:{
        a: number;
    };
    Date: string;
    TypeOrPrintName: string;
    SignatureOfRespondent: string;
}