import { firebaseApp, FirebaseDate, firestore } from "../firebase";

interface IConversation {
  membersId: string[];
  membersNames: string[];
  membersPictures: string[];
  id: string;
  updatedAt: Date | FirebaseDate;
  createdAt: Date | FirebaseDate;
  lastMessage: string;
  hasSeenLastMessage: ("true" | "false")[];
}

type OmitConversation = Omit<IConversation, "createdAt" | "updatedAt" | "hasSeenLastMessage">;

const addConversation = async (conversation) => {
  return await firestore.collection("conversations").add(conversation);
};

const enrichConvData = async (conversation) => {
  conversation.hasSeenLastMessage = ["true", "false"];
  conversation.updatedAt = firebaseApp.firestore.Timestamp.now();
  conversation.createdAt = firebaseApp.firestore.Timestamp.now();
  return await addConversation(conversation);
};

export const upConversations = async (): Promise<void> => {
  const conversation: OmitConversation[] = [
    {
      membersId: ["80eba300-7634-4158-9c89-5a4ad87f89f8", "4a32c8d5-6e23-48f9-b79d-759ab3d2a51f"],
      membersNames: ["John Peter", "Noa Antone"],
      membersPictures: [
        "https://avatarfiles.alphacoders.com/226/thumb-226055.png",
        "https://pfpmaker.com/_nuxt/img/profile-3-1.3e702c5.png"
      ],
      id: "84feeec3-15f9-4d28-81fb-f615d5181fad",
      lastMessage: "Salut Noa."
    },
    {
      membersId: ["4a32c8d5-6e23-48f9-b79d-759ab3d2a51f", "137ed4f1-10af-4a05-8d4e-c864104955e5"],
      membersNames: ["Noa Antone", "Elio Alexis"],
      membersPictures: [
        "https://pfpmaker.com/_nuxt/img/profile-3-1.3e702c5.png",
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3573926f-d599-49ee-b873-67080338e9a8/ddc4x6j-3d08bbe8-8f79-4121-a7c4-b43b9dc1f326.jpg/v1/fill/w_1280,h_1278,q_75,strp/profile_picture_maker_by_zoom2636_ddc4x6j-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI3OCIsInBhdGgiOiJcL2ZcLzM1NzM5MjZmLWQ1OTktNDllZS1iODczLTY3MDgwMzM4ZTlhOFwvZGRjNHg2ai0zZDA4YmJlOC04Zjc5LTQxMjEtYTdjNC1iNDNiOWRjMWYzMjYuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.MnDAlQ-vFE_VZWWvg-_kYSvPBiJf_XrTVztIsBoAAd4"
      ],
      id: "81ff3d2f-902d-447e-8879-19a4e4c78dc9",
      lastMessage: "Holà Elio, ça va ?"
    }
  ];

  await Promise.all(conversation.map(async (conversation) => await enrichConvData(conversation)));
};
