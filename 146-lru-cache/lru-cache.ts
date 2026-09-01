// Problem: https://leetcode.cn/problems/lru-cache/
// Accepted at: 2026年9月1日 23:52

class LRUCache {
    capacity: number;
    cache: Map<number, number>;
    constructor(capacity: number) {
        this.capacity = capacity;
        this.cache = new Map<number, number>();
    }

    get(key: number): number {
        if (this.cache.has(key)) {
            const val = this.cache.get(key);
            this.cache.delete(key);
            this.cache.set(key, val);
            return val;
        }
        return -1;
    }

    put(key: number, value: number): void {
        if (this.cache.has(key)) {
            this.cache.delete(key);
            this.cache.set(key, value);
        } else {
            if (this.cache.size >= this.capacity) {
                this.cache.delete(this.cache.keys().next().value);
                this.cache.set(key, value);
            } else {
                this.cache.set(key, value);
            }
        }
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
