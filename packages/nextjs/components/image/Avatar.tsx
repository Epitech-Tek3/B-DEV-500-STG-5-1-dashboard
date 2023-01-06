import { useAuth } from "@hooks/useAuth";
import { Avatar as AvatarMui, AvatarProps as AvatarMuiProps } from "@material-ui/core";
import React from "react";

const stringToColor = (string) => {
  let hash = 0;
  let i = 0;

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let colour = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    colour += `00${value.toString(16)}`.substr(-2);
  }

  return colour;
};

export interface AvatarProps extends AvatarMuiProps {
  src?: string;
}

export const Avatar: React.FC<AvatarProps> = ({ src, ...props }) => {
  const { currentUser } = useAuth();

  return (
    <AvatarMui
      {...props}
      alt="profile-picture"
      title="profile-picture"
      src={src ?? currentUser.photoURL}
      style={{ backgroundColor: stringToColor(currentUser.displayName), ...props.style }}
    >
      {!src &&
        !currentUser.photoURL &&
        currentUser.displayName.substring(
          currentUser.displayName.indexOf(" "),
          currentUser.displayName.indexOf(" ") + 2
        )}
    </AvatarMui>
  );
};
