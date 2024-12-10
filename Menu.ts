import readlinesync = require('readline-sync');

export function main() {
  let opcao: number;

  while (true) {
    console.log('*'.repeat(50));
    console.log();
    console.log('BANCO SEM NOME');
    console.log();
    console.log('*'.repeat(50));
    console.log();
    console.log('1 - Criar Conta');
    console.log('2 - Listar todas as Contas');
    console.log('3 - Buscar Conta por Número');
    console.log('4 - Atualizar dados da Conta');
    console.log('5 - Apagar Conta');
    console.log('6 - Sacar');
    console.log('7 - Depositar');
    console.log('8 - Transferir valores entre Contas');
    console.log('9 - Sair');
    console.log();
    console.log('*'.repeat(50));
    console.log();

    opcao = readlinesync.questionInt('Entre com a opção desejada: ');

    if (opcao === 9) {
      console.log('\nBanco Sem Nome - O Começo do Fim é Hoje!\n');
      about();
      process.exit(0);
    }

    switch (opcao) {
      case 1:
        console.log('\n\nCriar Conta\n\n');
        break;
      case 2:
        console.log('\n\nListar todas as Contas\n\n');
        break;
      case 3:
        console.log('\n\nConsultar dados da Conta - por número\n\n');
        break;
      case 4:
        console.log('\n\nAtualizar dados da Conta\n\n');
        break;
      case 5:
        console.log('\n\nApagar um Conta\n\n');
        break;
      case 6:
        console.log('\n\nSaque\n\n');
        break;
      case 7:
        console.log('\n\nDepósito\n\n');
        break;
      case 8:
        console.log('\n\nTransferência entre Contas\n\n');
        break;
      default:
        console.log('\n\nOpção Inválida!\n\n');
        break;
    }
  }
}

export function about() {
  console.log('*'.repeat(50));
  console.log('Projeto Desenvolvido por: ');
  console.log('Cauã R. Pereira - 7aauac@gmail.com');
  console.log('https://github.com/c-rocha7');
  console.log('*'.repeat(50));
}

main();
