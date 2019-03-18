import test from 'ava'

import moment from 'moment'
import Record from 'timeseries-record'
import RecordContext from '@strong-roots-capital/record-context'
import IndicatorRecord from '@strong-roots-capital/indicator-record'
import randomRecordStream from '@strong-roots-capital/random-record-stream'
import { Writable, Transform } from 'readable-stream'


/**
 * Library under test
 */

import toIndicatorRecord from '../src/to-indicator-record'


function recordToIndicatorRecord(record: Record, context: RecordContext): IndicatorRecord {
    return {
        context: context,
        record: record,
        indicators: new Map<string, any>()
    }
}

test.cb('should convert stream of Record objects into IndicatorRecord objects', t => {
    const days = 100
    const start = moment.utc().startOf('year')
    const end = start.clone().add(days-1, 'days')

    const context: RecordContext = {
        timeframe: 1,
        tradepair: 'CHO',
        exchange: 'backyard'
    }

    let generatedRecords: Record[] = []
    const listener = new Transform({
        objectMode: true,
        transform(record: Record, _: string, callback: any) {
            generatedRecords.push(record)
            this.push(record)
            callback()
        }
    })

    const indicatorRecords: IndicatorRecord[] = []
    const sink = new Writable({
        objectMode: true,
        write(indicatorRecord: IndicatorRecord, _: string, callback: any) {
            indicatorRecords.push(indicatorRecord)
            callback()
        }
    })

    randomRecordStream(start.toDate(), end.toDate())
        .pipe(listener)
        .pipe(toIndicatorRecord(context))
        .pipe(sink)

    sink.on('finish', () => {
        t.deepEqual(generatedRecords.map(r => recordToIndicatorRecord(r, context)), indicatorRecords)
        t.end()
    })
})
