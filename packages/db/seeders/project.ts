import { firestore } from "../firebase";

interface IProject {
  id: string;
  projectId: string;
  projectNumber: number;
  projectName: string;
  ownerId: string;
  ownerEmail: string;
  specification: boolean;
}

const addProject = async (project) => {
  try {
    const user = (await firestore.collection("users").where("email", "==", project.ownerEmail).get()).docs[0].data();

    return await firestore.collection("projects").add({ ...project, ownerId: user.id });
  } catch (e) {
    // @ts-ignore
    throw new Error(e);
  }
};

export const upProjects = async (): Promise<void> => {
  const projects: Omit<IProject, "id">[] = [
    {
      projectId: "Blaproject-d7k9a",
      projectNumber: 9876545672144,
      projectName: "BlaProject",
      ownerId: "80eba300-7634-4158-9c89-5a4ad87f89f8",
      ownerEmail: "john.peter@azinove.com",
      specification: false
    },
    {
      projectId: "Eliosproject-da03l",
      projectNumber: 1982456764579,
      projectName: "ElioProject",
      ownerId: "137ed4f1-10af-4a05-8d4e-c864104955e5",
      ownerEmail: "elio.alexis@azinove.com",
      specification: false
    }
  ];

  await Promise.all(projects.map(async (project) => await addProject(project)));
  await firestore.collection("projects").add({
    projectId: "project-demo-dy876d",
    projectNumber: 457061818397,
    projectName: "project demo",
    ownerId: "Dh5Dy152oR82JRAPXMuT",
    ownerEmail: "no-name@tk78.lesang",
    specification: false
  });
};
