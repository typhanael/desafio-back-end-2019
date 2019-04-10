
#função recursiva para a formação do triangulo...
#inicia a quantidade de * que serão utilizados com 0,
#caso não seja passado valores como argumento...
def triangulo(n, estrelas=0):
    #teste para a saida da recursão
    if n == 0:
        return 0
    else:
        print('_'*(n-1)+'*'*(estrelas*2+1)+'_'* (n-1) )
        #recursão para se montar o triangulo...
        return triangulo( n-1, estrelas + 1 )
 
#Leitura dos dados...
def main():
    print("Digite o tamanho da base do triangulo: ")
    b = input()

    print("Triangulo: \n")
    triangulo(int(b))


if __name__ == '__main__':
    main()