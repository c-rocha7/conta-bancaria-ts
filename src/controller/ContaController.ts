import { Conta } from '../model/Conta';
import { ContaRepository } from '../repository/ContaRepository';

export class ContaController implements ContaRepository {
  private listaContas: Array<Conta> = new Array<Conta>();
  numero: number = 0;

  procurarPorNumero(numero: number): void {
    const buscaConta = this.buscarNoArray(numero);

    if (buscaConta !== null) buscaConta.visualizar();
    else console.log('\nConta não Encontrada!');
  }

  listarTodas(): void {
    for (let conta of this.listaContas) {
      conta.visualizar();
    }
  }

  cadastrar(conta: Conta): void {
    this.listaContas.push(conta);
    console.log(`\nA Conta número ${conta.numero} foi criada com sucesso!`);
  }

  atualizar(conta: Conta): void {
    const buscaConta = this.buscarNoArray(conta.numero);

    if (buscaConta !== null) {
      this.listaContas[this.listaContas.indexOf(buscaConta)] = conta;
      console.log(`A conta número ${conta.numero} foi atualizada com sucesso!`);
    } else console.log('\nConta não Encontrada!');
  }

  deletar(numero: number): void {
    const buscaConta = this.buscarNoArray(numero);

    if (buscaConta !== null) {
      this.listaContas.splice(this.listaContas.indexOf(buscaConta), 1);
      console.log(`A conta foi Deletada com sucesso!`);
    } else console.log('\nConta não Encontrada!');
  }

  // Métodos Bancários
  sacar(numero: number, valor: number): void {
    const buscaConta = this.buscarNoArray(numero);

    if (buscaConta != null) {
      if (buscaConta.sacar(valor) === true) {
        console.log(
          `O saque na conta número ${numero} foi efetuado com sucesso!`
        );
      } else {
        console.log(`A conta número ${numero} não foi encontrada!`);
      }
    } else console.log('\nConta não Encontrada!');
  }

  depositar(numero: number, valor: number): void {
    const buscaConta = this.buscarNoArray(numero);

    if (buscaConta != null) {
      buscaConta.depositar(valor);
      console.log('O depósito foi efetuado com sucesso');
    } else console.log('\nConta não Encontrada!');
  }

  transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
    const contaOrigem = this.buscarNoArray(numeroOrigem);
    const contaDestino = this.buscarNoArray(numeroDestino);

    if (contaOrigem !== null && contaDestino !== null) {
      if (contaOrigem.sacar(valor) === true) {
        contaDestino.depositar(valor);
        console.log('A transferência foi efetuada com sucesso');
      }
    } else
      console.log('Conta de Origem e/ou Conta de Destino não foi encontrada!');
  }

  procurarPorTitular(titular: string): void {
    // Filtragem dos dados
    let buscaPorTitular = this.listaContas.filter((conta) =>
      conta.titular.toUpperCase().includes(titular.toUpperCase())
    );

    // Listagem dos Dados
    buscaPorTitular.forEach((conta) => conta.visualizar());
  }

  public gerarNumero(): number {
    return ++this.numero;
  }

  public buscarNoArray(numero: number): Conta | null {
    for (let conta of this.listaContas) {
      if (conta.numero === numero) return conta;
    }

    return null;
  }
}
