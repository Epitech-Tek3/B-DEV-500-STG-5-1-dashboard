import chalk from "chalk";
import debug from "debug";
import { upConversations } from "./conversation";
import { upLangs } from "./lang";
import { upMessages } from "./message";
import { upNotifications } from "./notification";
import { upProjects } from "./project";
import { upUsers } from "./user";

export const up = async () => {
  // Use a seed for chance to deterministic
  await upLangs();
  await upUsers();
  await upConversations();
  await upMessages();
  await upNotifications();
  await upProjects();
  debug("init:seed")(chalk.green("Every seeds went well"));
  return process.exit();
};
