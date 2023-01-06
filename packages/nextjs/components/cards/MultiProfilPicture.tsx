import React from "react";
import { Flex, Image } from "rebass";

export const MultiProfilPicture = () => {
  return (
    <Flex width="fit-content" sx={{ borderRadius: "50%", overflow: "hidden" }}>
      <Flex flexDirection="column">
        <Image
          width={25}
          src="https://firebasestorage.googleapis.com/v0/b/azinove-d89e6.appspot.com/o/users%2FClement-Muth.jpg?alt=media"
        />
        <Image
          width={25}
          src="https://firebasestorage.googleapis.com/v0/b/azinove-d89e6.appspot.com/o/users%2FClement-Muth.jpg?alt=media"
        />
      </Flex>
      <Image
        width={25}
        height={50}
        my="auto"
        src="https://firebasestorage.googleapis.com/v0/b/azinove-d89e6.appspot.com/o/users%2FClement-Muth.jpg?alt=media"
        sx={{ objectFit: "cover" }}
      />
    </Flex>
  );
};
