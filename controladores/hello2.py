import sys 
# Takes first name and last name via command 
# line arguments and then display them 

# save the script as hello.py 

def fbn(n):
    result =[]
    a, b= 0,1
    while a < n:
         result.append(a)
         a,b = b,a+b
    return result
	
print("Output from Python") 
print("First name: " + sys.argv[1]+sys.argv[2]) 
#print("Last name: " + sys.argv[2]) 
print(fbn(int(sys.argv[1]))) 
	
	