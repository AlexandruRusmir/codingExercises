class RandomizedSet {
    constructor() {
        this.randomizedSet = new Set();
    }

    insert(val) {
        if (this.randomizedSet.has(val)) {
            return false;
        }
        this.randomizedSet.add(val);
        return true;
    }

    remove(val) {
        if (this.randomizedSet.has(val)) {
            this.randomizedSet.delete(val);
            return true;
        }
        return false;
    }

    getRandom() {
        const array = Array.from(this.randomizedSet);
        return array[Math.floor(Math.random() * array.length)];
    }
}