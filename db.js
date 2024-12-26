const mysql =require('mysql2/promise');

// Create a connection pool
const pool = mysql.createPool({ 
  host: 'localhost',
  user:'root',
  password:'root',
  database:'Mytask',
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10,
  idleTimeout: 60000,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0
})

// Export the pool
module.exports = pool;