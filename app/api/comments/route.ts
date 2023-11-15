import { NextResponse } from "next/server";
import database from "../../utils/db.config"
import getCurrentUser from "@/app/serverActions/getCurrentUser";
import randomString from "randomstring";
export async function POST(request:Request){
    try{

    const currentUser = await getCurrentUser();
    if(!currentUser ) return new NextResponse("Unauthorized", { status: 400 });
    

    const body = await request.json();
    const {title,postId,postSlug} = body;
    if(!postId)return new NextResponse("post Id not found", { status: 400 });
    if(!title) return new NextResponse("comment is missing",{status:400})
    if(!postSlug) return new NextResponse("post slug is missing",{status:400})

    const updatedPost = await database.post.update({
        where:{
            id:postId,
            slug:postSlug,
        },
        data:{
            comments:{
                create:{
                    title:title,
                    userEmail:currentUser.email,
                    slug:randomString.generate({
                        length: 32,
                        charset: 'alphanumeric'
                      }),
                }
            }
        },
    });
    return NextResponse.json(updatedPost,{status:200});
   
    }catch(error:any){
        console.log("error occured : ",error);
        return new NextResponse("Something went wrong", { status: 500 });

    }
}