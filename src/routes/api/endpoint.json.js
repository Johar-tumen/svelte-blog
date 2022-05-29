import DB from '$lib/database.js'

export async function get() {
const articles = await DB.prepare('SELECT * FROM posts').all()

    if (articles) {
        return {
            body: {
                articles
            }
        }
    }
   
}

