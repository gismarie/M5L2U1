const users = [
    { username: 'ppc90', age: 30, premium: false },
    { username: 'lu65', age: 24, premium: false },
    { username: 'maria3', age: 36, premium: false },
    { username: 'abc123', age: 20, premium: true },
    { username: 'sergio58', age: 26, premium: true }
  ];
  
  // Mostrar una frase por cada uno de los usuario premium
  for (const user of users) {
    if (user.premium) {
      console.log(`${user.username} es un usuario premium.`);
    }
  }
  
  // Crear un array con usuarios que no son premium
  const usuariosNoPremium = users.filter(user => !user.premium);
  
  console.log("Usuarios que no son premium:", usuariosNoPremium);
  