import {JsonProperty} from 'ts-serializer-core';

export class User {

    @JsonProperty('identifier')
    public id: number;

    @JsonProperty('lastName')
    public lastName: string;

    @JsonProperty('firstName')
    public firstName: string;

    @JsonProperty({excludeToJson: true})
    public nickName: string;

    @JsonProperty('fullname')
    public getFullName(): string {
        return this.firstName + ' ' + this.lastName;
    }

    @JsonProperty('description')
    public getDescription(): string {
        return this.id + ' : ' + this.firstName + ' - ' + this.lastName;
    }
}