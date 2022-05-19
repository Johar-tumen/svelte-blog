import sqlite from 'better-sqlite3'

const db = sqlite('./blog.db')
export default db