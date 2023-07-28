function calculadora(num1, num2, operacao) {
    switch (operacao) {
      case 1:
        return num1 + num2;
      case 2:
        return num1 - num2;
      case 3:
        return num1 * num2;
      case 4:
        return num2 !== 0 ? num1 / num2 : 0;
      default:
        return 0;
    }
  }
  
  // Exemplos de uso:
  console.log(calculadora(5, 3, 1)); // Resultado: 8 (soma)
  console.log(calculadora(5, 3, 2)); // Resultado: 2 (subtração)
  console.log(calculadora(5, 3, 3)); // Resultado: 15 (multiplicação)
  console.log(calculadora(6, 3, 4)); // Resultado: 2 (divisão)
  console.log(calculadora(5, 3, 5)); // Resultado: 0 (operação inválida)