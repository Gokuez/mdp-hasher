const crypto = require('crypto');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Entrez le mot de passe à hacher : ', (password) => {
  const hash = crypto.createHash('sha256').update(password).digest('hex');
  console.log(`Le mot de passe haché en SHA-256 est : ${hash}`);
  rl.close();
});
