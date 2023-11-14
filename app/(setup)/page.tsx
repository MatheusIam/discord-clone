import { initialProfile } from "@/lib/initial-profile";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import InitialModal from "@/components/modals/initial-modal";

const SetupPage = async () => {
  const perfil = await initialProfile();
  // tentativa de saber quais servidor o usuário está
  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          perfilId: perfil.id,
        },
      },
    },
  });

  if (server) return redirect(`/servers/${server.id}`);
  else return <InitialModal />;
};

export default SetupPage;
