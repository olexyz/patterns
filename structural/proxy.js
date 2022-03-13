function networkFetch(url){
    return url+" - Ответ сервера";
}
const cache = new Set()
const proxedFetch = new Proxy(networkFetch,{
    apply(target, thisArg, args) {
        const url = args[0];
        if(cache.has(url)){
            return url + " - Ответ из кэша"
        }
        else{
            cache.add(url)
            return Reflect.apply(target, thisArg, args)
        }
    }
})
console.log(proxedFetch('angular.io'))
console.log(proxedFetch('react.io'))
console.log(proxedFetch('angular.io'))