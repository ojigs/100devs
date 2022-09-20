function longestConsec(strarr, k) {
  if (strarr.length == 0 || k > strarr.length || k <= 0) {
    return ""
  }
  return strarr.map((e, i, a) => a.slice(i, i+k).join(''))
                .reduce((sum, curr) => curr.length > sum.length ? curr : sum)
}
