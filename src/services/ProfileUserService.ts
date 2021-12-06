import prismaClient from "../prisma";

class  ProfileUserService {
  async execute(user_id: string) {
    const user = await prismaClient.user.findFirst({
      where: {
        id: user_id
      }
    });

    // encontrar o usuário
    return user;
  }
}

export { ProfileUserService }