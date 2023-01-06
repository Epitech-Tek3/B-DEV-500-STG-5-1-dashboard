import { UpdateUserProps } from "./interfaces";

export const userField = "id email familyName givenName locale name nickname picture updatedAt isValid";
export const valideField = `success`;

export const completProfilFragment = ({ variables }: UpdateUserProps) => {
  return variables.userType === "Professionnel"
    ? `infos: {id: "${variables.id}" activity: "${variables.activity}" addressCompany: "${variables.addressCompany}" companyName: "${variables.companyName}" phoneNumberCompany: "${variables.phoneNumberCompany}" siren: "${variables.siren}" socialDenomination: "${variables.socialDenomination}" userType: "${variables.userType}" isValid: "true"}`
    : `infos: {id: "${variables.id}" activity: "${variables.activity}" address: "${variables.address}" phoneNumber: "${variables.phoneNumber}" userType: "${variables.userType}" isValid: "true"}`;
};

export const UserFragment = (variables: any) =>
  `infos: {id: "${variables.id}" email: "${variables.email}" familyName: "${variables.familyName}" givenName: "${variables.givenName}" locale: "${variables.locale}" name: "${variables.name}" nickname: "${variables.nickname}" picture: "${variables.picture}" updatedAt: "${variables.updatedAt}" isValid: "false"}`;
