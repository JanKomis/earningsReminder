"use server";
import prisma from "./db";
import { auth } from "@/auth";
import {
  getUserIdByEmail,
  createWatchlist,
  updateWatchlist,
} from "@/lib/query";
import { revalidatePath } from "next/cache";

/*
export async function manageWatchlist(stockId, watchlist, watchlistId) {
  const session = await auth();

  const aaa = stockId;
  console.log(aaa);
  console.log(watchlist);
  console.log(session.user.email);
}
*/

export async function manageWatchlist(
  stockId,
  watchlistId,
  isInWatchlist
) {
  const session = await auth();
  const mail = session.user.email;
  const userId = await getUserIdByEmail(mail);


  let watchlist;
  if (watchlistId) {
    watchlist = await prisma.watchlist.findUnique({
      where: { id: watchlistId },
      include: { stocks: true },
    });
    const update = await updateWatchlist(watchlist.id, stockId, isInWatchlist);
    console.log(update);
    revalidatePath("/dashboard/screener");
  } else {
    watchlist = await createWatchlist(userId);
    const update = await updateWatchlist(watchlist.id, stockId, isInWatchlist);
    console.log(update);
    revalidatePath("/dashboard/screener");
  }
}
