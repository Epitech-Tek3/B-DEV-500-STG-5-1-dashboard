import { StoreModules } from "@containers/default";

export type MeT = {
  accessToken?: string;
  modules: StoreModules;
  clientId?: string;
  activity?: string;
  address?: string;
  addressCompany?: string;
  birthdate?: string;
  companyActivity?: string;
  companyAddress?: string;
  companyName?: string;
  companyPhone?: string;
  companySiren?: string;
  companySocialDenomination?: string;
  contactEmail?: string;
  email?: string;
  firstName?: string;
  id: string;
  isComplete?: boolean;
  lastName?: string;
  userType?: string;
};
