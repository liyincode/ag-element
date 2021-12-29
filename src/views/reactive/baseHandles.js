import { reactive, reactiveMap } from "./reactive.js";
import { track, trigger } from "./effect.js";

const get = createGetter();
const set = createSetter()

function createGetter() {
  return function get(target, key, receiver) {
    const isExistMap = receiver === reactiveMap.get(target)
    if (isExistMap) {
      return target
    }

    const res = Reflect.get(target, key, receiver)
    track(target, 'get', key)

    if (typeof res === 'object' && res !== null) {
      return reactive(res)
    }
    return res
  }
}

function createSetter() {
  return function set(target, key, value, receiver) {
    const result = Reflect.set(target, key, value, receiver)
    trigger(target, 'set', key)
    return result
  }
}

export const mutableHandles = {
  get,
  set
}
