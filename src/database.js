import { Pool } from 'pg'

export const pool = new Pool({
    host:'localhost',
    user:'postgres',
    password:'postgres2021',
    database:'bdalmacen',
    port:5432
});