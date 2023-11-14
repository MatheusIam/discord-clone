import { currentUser, redirectToSignIn } from "@clerk/nextjs";
import { db } from "@/lib/db";

export const initialProfile = async () => {
  const user = await currentUser();

  if (!user) {
    return redirectToSignIn();
  }

  const profile = await db.perfil.findUnique({
    where: {
      userId: user.id,
    },
  });

  if (profile) {
    return profile;
  }

  const newProfile = await db.perfil.create({
    data: {
      userId: user.id,
      nome: `${user.firstName} ${user.lastName}`,
      fotoURL: user.imageUrl,
      email: user.emailAddresses[0].emailAddress,
    },
  });
};
