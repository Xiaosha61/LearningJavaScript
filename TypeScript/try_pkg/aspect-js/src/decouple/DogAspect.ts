import { beforeMethod, Metadata } from 'aspect.js'
import { Dog } from './Dog'

export class DogAspect {
    //@beforeMethod({ classNamePattern: /^Dog/, methodNamePattern: /^bark/ })
    @beforeMethod({ classes: [Dog], methods: [Dog.prototype.bark] })
    beforeBark(_meta: Metadata) {
        console.log('[Dog - Decoupled - before bark]')
    }
}



