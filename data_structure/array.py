monthly_epense = [2200,2350,2600,2130,2190]

# 1. In Feb, how many dollars you spent extra compare to January?
# 2. Find out your total expense in first quarter (first three months) of the year.
# 3. Find out if you spent exactly 2000 dollars in any month
# 4. June month just finished and your expense is 1980 dollar. Add this item to our monthly expense list
# 5. You returned an item that you bought in a month of April and
# got a refund of 200$. Make a correction to your monthly expense list
# based on this

diff = monthly_epense[1]- monthly_epense[0]
print ('extra expense in Feb is $',diff)


ttl_exp_q1 = monthly_epense[0] + monthly_epense[1] + monthly_epense[2]
print ('total expense in Q1 $',ttl_exp_q1)

# for i in monthly_epense:
#     if i == 2000:
#         print ('yes')
#     else:
#         print('no')

2000 in monthly_epense

# monthly_epense.insert(5,1980)
monthly_epense.append(1980)
print  (monthly_epense)      


monthly_epense[3] = monthly_epense[3]-200
print (monthly_epense)


##################################################

heros=['spider man','thor','hulk','iron man','captain america']

# 1. Length of the list
# 2. Add 'black panther' at the end of this list
# 3. You realize that you need to add 'black panther' after 'hulk',
#    so remove it from the list first and then add it after 'hulk'
# 4. Now you don't like thor and hulk because they get angry easily :)
#    So you want to remove thor and hulk from list and replace them with doctor strange (because he is cool).
#    Do that with one line of code.
# 5. Sort the heros list in alphabetical order (Hint. Use dir() functions to list down all functions available in list)

print (len(heros))

heros.append('black panther')
print (heros)

heros.remove('black panther')
heros.insert(3, 'black panther')
print (heros)

heros[1:3]= ['doctor strange']
print (heros)

heros.sort()
print(heros)

#Create a list of all odd numbers between 1 and a max number. Max number is something you need to take from a user using input() function

a = input("please input the max number:")
odd_list =[]
for n in range(1,int(a)):
    if n % 2 != 0:
        odd_list.append(n)
print (odd_list)        