import { Rules, Values } from 'async-validator';
import {InjectionKey} from "vue";

export type FormData = {
    model: Record<string, unknown>
    rules?: Rules
}
export const key: InjectionKey<FormData> = Symbol('form-data');

export type FormItem = {
    validate: () => Promise<Values>
}

export type FormType = {
    validate: (cb: (isValid: boolean) => void) => void
}
