def get_binary(n:int):
    if (n== 0):
        return "0"
    binary =""
    while n>0:
        rem = n % 2
        binary = str(rem) + binary
        n = n // 2
    return binary
def set(binary :str)-> int:
    count = 0
    bin_n = int(binary,2)
    if (bin_n == 0):
        return 0
    while (bin_n >0):
        bin_n = bin_n & (bin_n - 1)
        count += 1
    return count