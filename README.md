# ngx-ts-serializer

[![npm version](https://badge.fury.io/js/ts-serializer-core.svg)](https://badge.fury.io/js/ngx-ts-serializer)
![NPM](https://img.shields.io/npm/l/ngx-ts-serializer)
![GitHub repo size](https://img.shields.io/github/repo-size/ts-serializer/ngx-ts-serializer)
![GitHub last commit](https://img.shields.io/github/last-commit/ts-serializer/ngx-ts-serializer)
![GitHub issues](https://img.shields.io/github/issues/ts-serializer/ngx-ts-serializer)
![GitHub top language](https://img.shields.io/github/languages/top/ts-serializer/ngx-ts-serializer)

## Summary

* [Introduction](#introduction)
* [Installation](#installation)
* [How to use](#how-to-use)
    * [Serializer](#serializer)
    * [Deserializer](#deserializer)
    * [Serialization/Deserialization configuration](#serializationdeserialization-configuration)
* [API](#api)
    * [JsonProperty](#jsonproperty)

## Introduction

Ngx-Ts-Serializer is a angular wrapper of ts-serializer-core library.

## Installation

```shell script
npm i ngx-ts-serializer ts-serializer-core
```

## How to use

```typescript
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxTsSerializerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public constructor(serialize: NgxTsSerializerService) {
    
  }
}
```
