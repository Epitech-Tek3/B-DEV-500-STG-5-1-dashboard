import React from "react";
import { Link } from "rebass";
import { Facebook as FacebookLogo } from "../Facebook";

export const Facebook = (props) => (
  <Link href="https://www.facebook.com/Azinove/" aria-label="facebook" rel="noreferrer" target="_blank">
    <FacebookLogo {...props} />
  </Link>
);
