export interface ICategories{
    id: string;
    slug: string;
    title: string;
    img: string|null;
}

export interface PostInterface {
    id: string;
    slug: string;
    title: string;
    desc: string;
    img: string;
    views: number;
    catSlug: string;
    userEmail: string;
    createdAt: string;
    updatedAt: string;
    cat: ICategories;
    user: User;
  }
  
  export interface User {
    id: string;
    name: string;
    email: string;
    emailVerified?: any;
    image: string;
    role: string;
  }
  

  
  