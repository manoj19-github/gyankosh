import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "../../../utils/db.config";


export const authOptions={
    adapter:PrismaAdapter(prisma),
    providers:[
        GithubProvider({
            clientId:String(process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID),
            clientSecret:String(process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET)
        }),
        GoogleProvider({
            clientId:String(process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID),
            clientSecret:String(process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET)
        }),
    ]
}

const handler = NextAuth(authOptions)


export {handler as GET,handler as POST};