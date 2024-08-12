import pg from 'pg'
const { Client } = pg
export const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'root',
    password: '',
    database: 'premium'
})


export default async function pgConnect(){
    await client.connect()
    console.log('Connected!')
    // await client.end()
}











// const res = await client.query('SELECT $1::text as message', ['Hello world!'])
// console.log(res.rows[0].message) // Hello world!
// await client.end()




