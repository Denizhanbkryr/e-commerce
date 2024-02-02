import { MD5 } from "crypto-js";

export const getUserAvatarURL = (email, { user }) => {
  if (!email) return "";

  const emailHash = MD5(user.email);

  return `https://www.gravatar.com/avatar/${emailHash}`;
};
