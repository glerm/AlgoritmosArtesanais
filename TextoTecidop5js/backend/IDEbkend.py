############
############ scriptzito para contar as palavras de uma entrada de texto
########### copyleft Glerm Soares GNU-GPL

from collections import Counter


cortaspaces=[]
listadepalavras=[]
entradadetexto=""


while entradadetexto != "exit":

	entradadetexto=input("Digite: ")
	cortaspaces=entradadetexto.split()
	for elemento in cortaspaces:
		if (elemento != "exit"):
			listadepalavras.append(elemento)
	
contapalavras = Counter(listadepalavras)
print ("_________________________\n")
print ("Saida: "+ str(listadepalavras))
print ("_________________________\n\n")
print ("Contagem de palavras: "+ str(contapalavras))
print ("\n+++++++++++++++++++++++++\n")
