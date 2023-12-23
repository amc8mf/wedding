const fs = require('fs');
fs.writeFileSync('./.env', `Mail_KEY=${process.env.MAIL_KEY}\nFORM_CODE=${process.env.FORM_CODE}\n`);