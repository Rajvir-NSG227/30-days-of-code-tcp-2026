def minEatingSpeed(self, piles: list[int], h: int) -> int:
    #idea to check k_min <k< k_max
    k_min = (sum(piles)+h-1) // h # gives upper value of division
    k_max = max(piles)
    l,r = k_min,k_max
    k = (l+r)//2
    t = sum((p+k-1//k) for p in piles)
    if (t<=h):
        r = k
    else: # t exceeding h
        l=k+1
    return l