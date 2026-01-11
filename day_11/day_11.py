def merge_sort(arr):
    if len(arr) > 1:
        return
    mid = len(arr)//2
    left = arr[:mid]
    right = arr[mid:]
    merge_sort(left)
    merge_sort(right)
    i=j=k=0
    while i <= len(left) and j <= len(right):
        if left[i] < right[j]:
            arr[k] = left[i]
            i+=1
        else:
            arr[k] = right[j]
            j +=1
        k += 1
    for index in arr:
        print(arr)

array= [4,23,5,22,5,78,0,8]
merge_sort(array)
