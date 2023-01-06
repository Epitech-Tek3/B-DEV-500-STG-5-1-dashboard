import express from "express";
import axios from "axios";

export const router = express.Router();

type T = {
  accessToken: string;
};

const get = async ({ accessToken }: T) => {
  const mails = (
    await axios.get(
      `https://gmail.googleapis.com/gmail/v1/users/me/threads?key=AIzaSyCpvNThoVKNEWWQPLhkhQ4ngBa2yK5_0qw&access_token=${accessToken}`
    )
  ).data;
  return await Promise.all(
    mails.threads.map(
      async ({ id }) =>
        (
          await axios.get(
            `https://gmail.googleapis.com/gmail/v1/users/me/threads/${id}?key=AIzaSyCpvNThoVKNEWWQPLhkhQ4ngBa2yK5_0qw&access_token=${accessToken}`
          )
        ).data
    )
  );
};

router.post("/", async (req, res) => {
  const { accessToken } = req.body.data;

  try {
    res.send({ data: await get({ accessToken }) });
  } catch (e: any) {
    console.error(e);
    res.status(403).send(e);
  }
});

module.exports = router;
