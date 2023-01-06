import { auth, database } from "../firebase";

interface IUser {
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
  picture?: string;
  firstName?: string;
  id: string;
  isComplete?: boolean;
  lastName?: string;
  userType?: string;
}

const addUserToAuthentication = async (user) => {
  return (await auth.auth.createUserWithEmailAndPassword(user.email, "123456789")).user?.uid;
};

const addUserToCollection = async (user, userId) => {
  return await database.user.doc(userId).set({ id: userId, ...user });
};

const users: Omit<IUser, "id">[] = [
  {
    email: "john.peter@azinove.com",
    lastName: "Peter",
    firstName: "John",
    picture: "https://avatarfiles.alphacoders.com/226/thumb-226055.png",
    isComplete: true,
    birthdate: "2000-01-28",
    companyActivity: "Développement web",
    companyAddress:
      "{'label':'22 Rue d'Eschau, Ostwald, France','value':{'description':'22 Rue d'Eschau, Ostwald, France','matched_substrings':[{'length':2,'offset':0},{'length':12,'offset':3}],'place_id':'ChIJ58NGQHbLlkcR6x-QcdEw7KM','reference':'ChIJ58NGQHbLlkcR6x-QcdEw7KM','structured_formatting':{'main_text':'22 Rue d'Eschau','main_text_matched_substrings':[{'length':2,'offset':0},{'length':12,'offset':3}],'secondary_text':'Ostwald, France'},'terms':[{'offset':0,'value':'22'},{'offset':3,'value':'Rue d'Eschau'},{'offset':17,'value':'Ostwald'},{'offset':26,'value':'France'}],'types':['street_address','geocode']}}",
    companyName: "Azinove",
    companyPhone: "01 78 34 12 89",
    companySiren: "127-938-502",
    companySocialDenomination: "Agence web",
    contactEmail: "john.peter@azinove.com",
    userType: "professional"
  },
  {
    email: "elio.alexis@azinove.com",
    lastName: "Elio",
    firstName: "Elio",
    picture:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3573926f-d599-49ee-b873-67080338e9a8/ddc4x6j-3d08bbe8-8f79-4121-a7c4-b43b9dc1f326.jpg/v1/fill/w_1280,h_1278,q_75,strp/profile_picture_maker_by_zoom2636_ddc4x6j-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI3OCIsInBhdGgiOiJcL2ZcLzM1NzM5MjZmLWQ1OTktNDllZS1iODczLTY3MDgwMzM4ZTlhOFwvZGRjNHg2ai0zZDA4YmJlOC04Zjc5LTQxMjEtYTdjNC1iNDNiOWRjMWYzMjYuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.MnDAlQ-vFE_VZWWvg-_kYSvPBiJf_XrTVztIsBoAAd4",
    isComplete: true,
    birthdate: "2002-01-28",
    companyActivity: "Développement web",
    companyAddress:
      "{'label':'22 Rue d'Eschau, Ostwald, France','value':{'description':'22 Rue d'Eschau, Ostwald, France','matched_substrings':[{'length':2,'offset':0},{'length':12,'offset':3}],'place_id':'ChIJ58NGQHbLlkcR6x-QcdEw7KM','reference':'ChIJ58NGQHbLlkcR6x-QcdEw7KM','structured_formatting':{'main_text':'22 Rue d'Eschau','main_text_matched_substrings':[{'length':2,'offset':0},{'length':12,'offset':3}],'secondary_text':'Ostwald, France'},'terms':[{'offset':0,'value':'22'},{'offset':3,'value':'Rue d'Eschau'},{'offset':17,'value':'Ostwald'},{'offset':26,'value':'France'}],'types':['street_address','geocode']}}",
    companyName: "Azinove",
    companyPhone: "01 78 34 12 89",
    companySiren: "127-931-532",
    companySocialDenomination: "Agence web",
    contactEmail: "elio.alexis@azinove.com",
    userType: "professional"
  }
];

export const upUsers = async (): Promise<void> => {
  const usersId = await Promise.all(
    users.map(async (user) => {
      // It is currently not working with two promises ?!
      return await addUserToAuthentication(user);
      // await addUserToCollection(user);
    })
  );
  await Promise.all(
    users.map(async (user, i) => {
      await addUserToCollection(user, usersId[i]);
    })
  );
};
