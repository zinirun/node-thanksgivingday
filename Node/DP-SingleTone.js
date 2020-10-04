// 싱글턴 패턴
// config 파일을 한번만 읽기 위해
// redis 기반의 캐시 매니저 모듈을 만들 때 (캐시: 기존의 데이터를 초기화하지 않고 리턴하려고)

class CacheManager {
    constructor() {
        if (!CacheManager.instance) {
            this._cache = [];
            CacheManager.instance = this;
        }
        return CacheManager.instance; // this
    }
}

const instance = new CacheManager();
Object.freeze(instance);
