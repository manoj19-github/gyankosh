import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"


export default NextAuth({
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
})
