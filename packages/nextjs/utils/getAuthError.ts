export const getAuthError = (error: string) => {
  if (error === "auth/email-already-in-use") return "Cette adresse email est déjà utilisée.";
  if (error == "auth/wrong-password") return "Votre mot de passe est incorrecte.";
  if (error === "auth/password-not-match") return "Vos mots de passes ne correspondent pas.";
  if (error === "auth/password-too-short") return "Votre mot de passe est trop court.";
  if (error === "auth/password-too-long") return "Votre mot de passe est trop long.";
  if (error === "auth/user-not-found") return "Votre mot de passe est incorrecte.";
  if (error === "auth/email-not-found") return "Cette adresse email n'existe pas.";
};
