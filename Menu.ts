import readlinesync = require('readline-sync');
import { colors } from './src/util/Color';
import { ContaCorrente } from './src/model/ContaCorrente';
import { ContaPoupanca } from './src/model/ContaPoupanca';
import { ContaController } from './src/controller/ContaController';

export function main() {
  const contas: ContaController = new ContaController();

  let opcao,
    numero,
    agencia,
    tipo,
    saldo,
    limite,
    aniversario,
    numeroDestino,
    valor: number;
  let titular: string;
  const tiposContas = ['Conta Corrente', 'Conta Poupanca'];

  console.log('\nCriar Contas\n');

  let cc1: ContaCorrente = new ContaCorrente(
    contas.gerarNumero(),
    123,
    1,
    'João da Silva',
    1000,
    100.0
  );
  contas.cadastrar(cc1);

  let cc2: ContaCorrente = new ContaCorrente(
    contas.gerarNumero(),
    124,
    1,
    'Maria da Silva',
    2000,
    100.0
  );
  contas.cadastrar(cc2);

  let cp1: ContaPoupanca = new ContaPoupanca(
    contas.gerarNumero(),
    125,
    2,
    'Mariana dos Santos',
    4000,
    12
  );
  contas.cadastrar(cp1);

  let cp2: ContaPoupanca = new ContaPoupanca(
    contas.gerarNumero(),
    125,
    2,
    'Juliana Ramos',
    8000,
    15
  );
  contas.cadastrar(cp2);

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
    console.log('9 - Buscar Conta por Titular');
    console.log('0 - Sair');
    console.log();
    console.log('*'.repeat(50));
    console.log(colors.reset);

    opcao = readlinesync.questionInt('Entre com a opção desejada: ');

    if (opcao === 0) {
      console.log('\nBanco Sem Nome - O Começo do Fim é Hoje!\n');
      about();
      process.exit(0);
    }

    switch (opcao) {
      case 1:
        console.log('\n\nCriar Conta\n\n');

        console.log('Digite o número da agência: ');
        agencia = readlinesync.questionInt();

        console.log('Digite o nome do titular da conta: ');
        titular = readlinesync.question();

        console.log('Digite o tipo da conta: ');
        tipo = readlinesync.keyInSelect(tiposContas, '', { cancel: false }) + 1;

        console.log('Digite o saldo da conta (R$): ');
        saldo = readlinesync.questionFloat();

        switch (tipo) {
          case 1:
            console.log('Digite o limite da conta (R$): ');
            limite = readlinesync.questionFloat();

            contas.cadastrar(
              new ContaCorrente(
                contas.gerarNumero(),
                agencia,
                tipo,
                titular,
                saldo,
                limite
              )
            );

            keyPress();
            break;
          case 2:
            console.log('Digite o dia do aniversário da conta poupança: ');
            aniversario = readlinesync.questionInt();

            contas.cadastrar(
              new ContaPoupanca(
                contas.gerarNumero(),
                agencia,
                tipo,
                titular,
                saldo,
                aniversario
              )
            );

            keyPress();
            break;
        }

        break;
      case 2:
        console.log('\n\nListar todas as Contas\n\n');

        contas.listarTodas();

        keyPress();
        break;
      case 3:
        console.log('\n\nConsultar dados da Conta - por número\n\n');

        console.log('Digite o número da conta: ');
        numero = readlinesync.questionInt();

        contas.procurarPorNumero(numero);

        keyPress();
        break;
      case 4:
        console.log('\n\nAtualizar dados da Conta\n\n');

        console.log('Digite o número da conta: ');
        numero = readlinesync.questionInt();

        let conta = contas.buscarNoArray(numero);

        if (conta != null) {
          console.log('Digite o número da agência: ');
          agencia = readlinesync.questionInt();

          console.log('Digite o nome do titular da conta: ');
          titular = readlinesync.question();

          tipo = conta.tipo;

          console.log('Digite o saldo da conta (R$): ');
          saldo = readlinesync.questionFloat();

          switch (tipo) {
            case 1:
              console.log('Digite o limite da conta (R$): ');
              limite = readlinesync.questionFloat();

              contas.atualizar(
                new ContaCorrente(
                  contas.gerarNumero(),
                  agencia,
                  tipo,
                  titular,
                  saldo,
                  limite
                )
              );

              keyPress();
              break;
            case 2:
              console.log('Digite o dia do aniversário da conta poupança: ');
              aniversario = readlinesync.questionInt();

              contas.atualizar(
                new ContaPoupanca(
                  contas.gerarNumero(),
                  agencia,
                  tipo,
                  titular,
                  saldo,
                  aniversario
                )
              );

              keyPress();
              break;
          }
        } else {
          console.log(`A conta número ${numero} não foi encontrada!`);
        }

        keyPress();
        break;
      case 5:
        console.log('\n\nApagar um Conta\n\n');

        console.log('Digite o número da conta: ');
        numero = readlinesync.questionInt();

        contas.deletar(numero);

        keyPress();
        break;
      case 6:
        console.log('\n\nSaque\n\n');

        console.log('Digite o número da conta: ');
        numero = readlinesync.questionInt();

        console.log('Digite o valor do saque: ');
        valor = readlinesync.questionFloat();

        contas.sacar(numero, valor);

        keyPress();
        break;
      case 7:
        console.log('\n\nDepósito\n\n');

        console.log('Digite o número da conta: ');
        numero = readlinesync.questionInt();

        console.log('Digite o valor do depósito: ');
        valor = readlinesync.questionFloat();

        contas.depositar(numero, valor);

        keyPress();
        break;
      case 8:
        console.log('\n\nTransferência entre Contas\n\n');

        console.log('Digite o número da conta de origem: ');
        numero = readlinesync.questionInt();

        console.log('Digite o número da conta de destino: ');
        numeroDestino = readlinesync.questionInt();

        console.log('Digite o valor da transferência: ');
        valor = readlinesync.questionFloat();

        contas.transferir(numero, numeroDestino, valor);

        keyPress();
        break;

      case 9:
        console.log('\n\nConsulta pelo Titular\n\n');

        console.log('Digite o nome do titular: ');
        titular = readlinesync.question();

        contas.procurarPorTitular(titular);

        keyPress();
        break;
      default:
        console.log('\n\nOpção Inválida!\n\n');

        keyPress();
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

function keyPress(): void {
  console.log('\nPressione enter para continuar...');
  readlinesync.prompt();
}

main();
