"use server";

import { currentUser } from "@clerk/nextjs/server";
import { error } from "console";

const apiKey = process.env.PUBLIC_STREAM_API_KEY;
const apiSecret = process.env.STREAM_SECRET_KEY;

export const tokenProvider = async () => {
  const user = await currentUser();

  if (!user) throw new Error("user not logged in");
  if (!apiKey) throw new Error("API key not found");
  if (!apiSecret) throw new Error(" no API secret");
};
