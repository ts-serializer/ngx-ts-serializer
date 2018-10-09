import {JsonProperty} from 'ts-serializer-core';

export class Weapon {

    @JsonProperty('id')
    public id: number;

    @JsonProperty('name')
    public name: string;
}
