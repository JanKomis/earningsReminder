"use server";
import prisma from "./db";
import { auth } from "@/auth";
import {
  getUserIdByEmail,
  createWatchlist,
  updateWatchlist,
} from "@/lib/query";
import { revalidatePath } from "next/cache";

export async function manageWatchlist({ data, check = null }) {
  const session = await auth();
  const userId = await getUserIdByEmail(session.user.email);
  
  for (const item of data) {
    let watchlist;
    if (item.watchlist.watchlistId) {
      watchlist = await prisma.watchlist.findUnique({
        where: { id: item.watchlist.watchlistId },
        include: { stocks: true },
      });
    } else {
      watchlist = await createWatchlist(userId);
    }
    const update = await updateWatchlist(item.watchlist.watchlistId, item.id, item.watchlist.watchlist,check);
    //console.log(update);
    
  }
  revalidatePath("/dashboard/screener")
}