# include <stdio.h>
int swap(int *a, int *b){
    int temp = *a;
    *a = *b;
    *b = temp;
}

int partition (int arr[],int start,int end){
    int pivot = arr[end];
    int i = arr[start-1];
    for (int j = start ; j < end ; j ++){
        if (arr[j] <= pivot){
            i ++;
            swap(&arr[j],&arr[i]);

        }
    }
    swap(&arr[i+1],& arr[end]);
    return (i+1);
}
 void quicksort(int arr[],int start, int end){
    if (start < end){
        int pivoting_index = partition(arr,start,end);
        quicksort(arr,start,pivoting_index -1);
        quicksort(arr,pivoting_index -1,end);

    }
}