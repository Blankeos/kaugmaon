import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prismadb";

// Securing Pages and API Routes: https://next-auth.js.org/tutorials/securing-pages-and-api-routes
import { getServerSession } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth]";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions);
  if (session && session.user && session.user.email) {
    // Signed in

    // Find user in DB
    const user = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
    });

    if (!user || !user.email) return res.status(401); // can't find user in the database.

    // Get ticket
    const ticket = await prisma.ticket.findUnique({
      where: {
        userId: user.id,
      },
    });

    if (!ticket) {
      // Failed to get ticket, create a new one
      const createdTicket = await prisma.ticket.create({
        data: {
          user: {
            connect: { id: user.id },
          },
        },
      });

      return res.status(200).json({
        status: "Created a new ticket",
        ticket: createdTicket,
      });
    }

    return res.status(200).json({
      status: "Found existing ticket",
      ticket: ticket,
    });
  } else {
    // Not Signed in
    res.status(401);
  }
  res.end();
};
