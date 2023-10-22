import { NextResponse } from "next/server";
import database from "../../utils/db.config"
import getCurrentUser from "@/app/serverActions/getCurrentUser";


export async function POST(request:Request){
    try{

    const currentUser = await getCurrentUser();
    if(!currentUser || currentUser.role !=="ADMIN") return new NextResponse("Unauthorized", { status: 400 });
    

    const body = await request.json();
    const {slug,title,img}= body;
    const newCategory = await database.category.create({
        data:{
            slug,
            title,
            img
        }
    })
    return NextResponse.json(newCategory,{status:200});
}catch(error:any){
    console.log("error occured : ",error);
    return new NextResponse("Something went wrong", { status: 500 });
}
}

