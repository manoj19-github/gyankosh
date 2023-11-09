import database from "../utils/db.config";

const getPostDetails = async (postId: string) => {
  try {
    const postData = await database.post.findFirst({
      where: {
        id: postId,
      },
      include: {
        cat: true,
        user: true,
      },
    });
    if (postData === null) return postData;
    let relatedPost = await database.post.findMany({
      where: {
        catSlug: postData.catSlug,
        NOT: {
          id: postData.id,
        },
      },
      take: 10,
      skip: 0,
      include: {
        cat: true,
        user: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    if (
      !!relatedPost &&
      Array.isArray(relatedPost) &&
      relatedPost.length === 0
    ) {
      relatedPost = await database.post.findMany({
        where: {
          NOT: {
            id: postData.id,
          },
        },
        take: 10,
        skip: 0,
        include: {
          cat: true,
          user: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      });
    }
    const safePostData: any[] = relatedPost?.map((self) => {
      return {
        ...self,
        createdAt: self.createdAt.toISOString(),
        updatedAt: self.updatedAt.toISOString(),
      };
    });
    const combinedPostDataset = {
      ...postData,
      createdAt: postData.createdAt.toISOString(),
      updatedAt: postData.updatedAt.toISOString(),
      relatedPosts: safePostData,
    };
    return combinedPostDataset;
  } catch (error: any) {
    console.log("error occured : ", error);
    throw new Error(error);
  }
};

export default getPostDetails;
