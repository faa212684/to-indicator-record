# to-indicator-record [![Build status](https://travis-ci.org/strong-roots-capital/to-indicator-record.svg?branch=master)](https://travis-ci.org/strong-roots-capital/to-indicator-record) [![npm version](https://img.shields.io/npm/v/@strong-roots-capital/to-indicator-record.svg)](https://npmjs.org/package/@strong-roots-capital/to-indicator-record) [![codecov](https://codecov.io/gh/strong-roots-capital/to-indicator-record/branch/master/graph/badge.svg)](https://codecov.io/gh/strong-roots-capital/to-indicator-record)

> Transform records to indicator-records

## Install

``` shell
npm install @strong-roots-capital/to-indicator-record
```

## Use

``` typescript
import toIndicatorRecord from '@strong-roots-capital/to-indicator-record'
import randomRecordStream from '@strong-roots-capital/random-record-stream'

const context = getContext()
randomRecordStream(start.toDate(), end.toDate())
    .pipe(toIndicatorRecord(context))
    // and Records become IndicatorRecords
```

## Related

- [timeseries-record](https://github.com/strong-roots-capital/timeseries-record)
- [indicator-record](https://github.com/strong-roots-capital/indicator-record)
