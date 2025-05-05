n=input()
t=int(input())
g=int(input())
if n== "m":
	if (t>=10 and g==1):
		print(int(15000))
	elif (t<10 and g==1):
		print(int(10000))
	elif (t>=10 and g==0):
		print(int(10000))
	elif (t<10 and g==0):
		print(int(7000))
elif n== "f":
	if (t>=10 and g==1):
		print(int(12000))
	elif (t<10 and g==1):
		print(int(9000))
	elif (t>=10 and g==0):
		print(int(10000))
	elif (t<10 and g==0):
		print(int(6000))

