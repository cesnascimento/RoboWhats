import csv


with open('Cópia de Listagem de Telefones - Valores3.csv', 'r') as f:
    arquivos = csv.reader(f, delimiter=';')
    telefones = [arquivo[2] for arquivo in arquivos if arquivo[2].isnumeric()]
    print(telefones[0:51])