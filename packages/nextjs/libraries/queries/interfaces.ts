export interface UpdateUserProps {
  variables: {
    id: string;
    activity?: string;
    address?: string;
    addressCompany?: string;
    companyName?: string;
    phoneNumber?: string;
    phoneNumberCompany?: string;
    siren?: string;
    socialDenomination?: string;
    userType?: string;
    isValid?: string;
  };
}
