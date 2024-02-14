function generarContrasena() {
    const length = document.getElementById('length').value;
    const includeSymbols = document.getElementById('includeSymbols').checked;
    const includeNumbers = document.getElementById('includeNumbers').checked;
    const includeSpecialChars = document.getElementById('includeSpecialChars').checked;
    const excludeVowels = document.getElementById('excludeVowels').checked;
  
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const simbolos = '!@#$%^&*()_-+=<>?/[]{}|';
  
    let pool = caracteres;
  
    if (includeSymbols) pool += simbolos;
    if (includeNumbers) pool += '0123456789';
    if (includeSpecialChars) pool += simbolos;
    if (excludeVowels) pool = pool.replace(/[aeiouAEIOU]/g, '');
  
    let contrasena = '';
  
    for (let i = 0; i < length; i++) {
      const indice = Math.floor(Math.random() * pool.length);
      contrasena += pool.charAt(indice);
    }
  
    document.getElementById('contrasenaGenerada').innerText = `Contraseña generada: ${contrasena}`;
  }
  