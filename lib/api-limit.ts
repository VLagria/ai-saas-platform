import { auth } from "@clerk/nextjs";
import prismadb from "@/lib/prismadb";
import { MAX_FREE_COUNTS } from "@/prisma/constants";

export const increaseApiLimit = async () => {
    const { userId } = auth();

    if (!userId) {
        return;
    }

    const userApiLimit = await prismadb.userApiLmit.findUnique({
        where: {
            userID: userId
        }
    });

    if (userApiLimit) {
        await prismadb.userApiLmit.update({
            where: { userID: userId },
            data: { count: userApiLimit.count + 1 },
        });
    } 
    else{
        await prismadb.userApiLmit.create({
            data:{ userID: userId, count: 1 }
        });
    }
};

export const checkApiLimit = async () => {
    const { userId } = auth();

    if(!userId){
        return false;  
    }

    const userApiLimit = await prismadb.userApiLmit.findUnique({
        where : { 
            userID: userId  
        }
    });

    if(!userApiLimit || userApiLimit.count < MAX_FREE_COUNTS){
        return true;
    }
    else{
        return false;
    }

}