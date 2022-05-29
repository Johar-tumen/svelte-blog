import DB from "$lib/database.js";

// @ts-ignore
export const post = async ({request}) => {
    const data = await request.json();
    console.log(data)
    const postName = data.postName;
    const postBody = data.postBody;
    const dbData = DB.prepare('INSERT INTO Posts (title, body) VALUES (?,?)');
    const sendDbData = dbData.run(postName,postBody);
    return {
        body:{
            
        }
    }
}