import readlinesync = require('readline-sync');
import { Conta } from './src/model/Conta';
import { colors } from './src/util/Color';
import { ContaCorrente } from './src/model/ContaCorrente';
import { ContaPoupanca } from './src/model/ContaPoupanca';

export function main() {
  let opcao: number;

  // Cria novas instâncias (Objetos) da Classe Conta
  // const c1 = new Conta(1, 123, 1, 'Teste', 100000);
  // c1.visualizar();

  // Saque
  // console.log(c1.sacar(200000.0));
  // c1.visualizar();

  // const c2 = new Conta(2, 123, 2, 'Teste2', 200000);
  // c2.visualizar();

  // depósito
  // c2.depositar(100.0);
  // c2.visualizar();

  // Contas Correntes
  // const cc1 = new ContaCorrente(3, 123, 1, 'Teste3', 100000, 1000);
  // cc1.visualizar();

  // Saque na Conta Corrente
  // cc1.sacar(100500);
  // cc1.visualizar();

  // Depósito na Conta Corrente
  // cc1.depositar(2000);
  // cc1.visualizar();

  const cp1 = new ContaPoupanca(4, 123, 1, 'Teste4', 100000, 10);
  cp1.visualizar();
  cp1.sacar(50000);
  cp1.visualizar();
  cp1.depositar(25000);
  cp1.visualizar();

  console.log();

  while (true) {
    console.log(colors.bg.black, colors.fg.green);
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
    console.log(colors.reset);

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
  console.log(colors.bg.black, colors.fg.green);
  console.log('*'.repeat(50));
  console.log('Projeto Desenvolvido por: ');
  console.log('Cauã R. Pereira - 7aauac@gmail.com');
  console.log('https://github.com/c-rocha7');
  console.log('*'.repeat(50));
  console.log(colors.reset);
}

main();
