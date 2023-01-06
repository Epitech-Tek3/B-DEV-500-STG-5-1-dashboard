import express from "express";
import axios from "axios";

export const router = express.Router();

type T = {
  accessToken: string;
  section: string;
  filters: string;
};

const get = async ({ accessToken, section, filters }: T) => {
  return (
    await axios.get(
      `https://photoslibrary.googleapis.com/v1/${section}${
        filters
          ? `?${filters}&key=AIzaSyCpvNThoVKNEWWQPLhkhQ4ngBa2yK5_0qw`
          : "?key=AIzaSyCpvNThoVKNEWWQPLhkhQ4ngBa2yK5_0qw"
      }&access_token=${accessToken}`
    )
  ).data;
};

router.post("/", async (req, res) => {
  const { accessToken, section, filters } = req.body.data;

  try {
    res.send({ data: await get({ accessToken, section, filters }) });
  } catch (e: any) {
    console.error(e);
    res.status(403).send(e);
  }
});

module.exports = router;
