import {JsonProperty} from 'ts-serializer-core';

export class Animal {

    @JsonProperty('id')
    public id: number;

    @JsonProperty('name')
    public name: string;

    public pv: number;
}
