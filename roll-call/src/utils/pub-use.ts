// 获取assets静态资源
export  const getAssetsFile = (url: string) => {
    return new URL(`../assets/imgs/${url}`, import.meta.url).href
 }