// Problem: https://leetcode.cn/problems/longest-substring-without-repeating-characters/
// Accepted at: 2024年5月4日 13:05

int lengthOfLongestSubstring(char* s) {
    int length=strlen(s);
    int hash[128]={0};
    int maxlen=0;
    for(int i=0,j=0;i<length;i++){
        hash[s[i]]++;
        while(hash[s[i]] > 1) hash[s[j++]]--;
        maxlen = maxlen < (i-j+1)?(i-j+1):maxlen;
    }
    return maxlen;
}
