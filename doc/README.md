
to-indicator-record [![Build status](https://travis-ci.org/strong-roots-capital/to-indicator-record.svg?branch=master)](https://travis-ci.org/strong-roots-capital/to-indicator-record) [![npm version](https://img.shields.io/npm/v/@strong-roots-capital/to-indicator-record.svg)](https://npmjs.org/package/@strong-roots-capital/to-indicator-record) [![codecov](https://codecov.io/gh/strong-roots-capital/to-indicator-record/branch/master/graph/badge.svg)](https://codecov.io/gh/strong-roots-capital/to-indicator-record)
====================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================

> Transform records to indicator-records

Install
-------

```shell
npm install @strong-roots-capital/to-indicator-record
```

Use
---

```typescript
import toIndicatorRecord from '@strong-roots-capital/to-indicator-record'
// TODO: describe usage
```

Related
-------

TODO

Acknowledgments
---------------

TODO

## Index

### Functions

* [toIndicatorRecord](#toindicatorrecord)

---

## Functions

<a id="toindicatorrecord"></a>

###  toIndicatorRecord

▸ **toIndicatorRecord**(context: *`RecordContext`*): `Transform`

*Defined in [to-indicator-record.ts:19](https://github.com/strong-roots-capital/to-indicator-record/blob/35eb99e/src/to-indicator-record.ts#L19)*

Return a new Transform stream to promote a stream of Record objects into IndicatorRecord objects.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| context | `RecordContext` |  Context of record stream |

**Returns:** `Transform`
Transform stream promoting Records into empty IndicatorRecords

___

