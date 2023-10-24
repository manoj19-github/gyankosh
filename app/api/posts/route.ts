import { NextResponse } from "next/server";
import database from "../../utils/db.config"
import getCurrentUser from "@/app/serverActions/getCurrentUser";


export async function POST(request:Request){
    try{

    const currentUser:any = await getCurrentUser();
    if(!currentUser) return new NextResponse("Unauthorized", { status: 400 });
    

    const body = await request.json();
    
    const {title,description,assetUrl,category}= body;
    if(!title || title.trim() === "") return new NextResponse("title is required", { status: 400 });
    if(!description || description.trim() === "") return new NextResponse("description is required", { status: 400 });
    if(!category) return new NextResponse("category is required", { status: 400 });
    
    const newCategory = await database.category.update({
        where:{
            slug:category
        },
        data:{
            posts:{
                create:{
                    slug:title.toLowerCase(),
                    title:title.trim(),
                    img:!!assetUrl ? assetUrl :"",
                    desc:description,
                    userEmail:currentUser.email,


                }
            }
           
        }
    
    })
    return NextResponse.json(newCategory,{status:200});
}catch(error:any){
    console.log("error occured : ",error);
    return new NextResponse("Something went wrong", { status: 500 });
}
}

