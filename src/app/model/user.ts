import {JsonProperty} from 'ts-serializer-core';

export class User {

    @JsonProperty('identifier')
    public id: number;

    @JsonProperty('lastName')
    public lastName: string;

    @JsonProperty('firstName')
    public firstName: string;

    @JsonProperty({name: 'nickName', excludeToJson: true})
    public nickName: string;

    public getFullName(): string {
        return this.firstName + ' ' + this.lastName;
    }

    public getDescription(): string {
        return this.id + ' : ' + this.firstName + ' - ' + this.lastName;
    }
}
