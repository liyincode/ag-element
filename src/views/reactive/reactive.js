import { mutableHandles } from "./baseHandles.js";

export const reactiveMap = new WeakMap();

export function reactive(target) {
  return createReactiveObject(target, reactiveMap, mutableHandles)
}

export function createReactiveObject(target, proxyMap, proxyHandlers) {
  if (typeof target !== 'object') {
    console.warn(`reactive ${target} 必须是一个对象`)
    return target;
  }

  const existingProxy = proxyMap.get(target)
  if (existingProxy) {
    return existingProxy
  }
  const proxy = new Proxy(target, proxyHandlers)

  proxyMap.set(target, proxy)
  return proxy
}
