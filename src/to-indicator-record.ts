/**
 * to-indicator-record
 * Transform records to indicator-records
 */

import Record from 'timeseries-record'
import RecordContext from '@strong-roots-capital/record-context'
import IndicatorRecord from '@strong-roots-capital/indicator-record'
import { Transform } from 'readable-stream'


/**
 * Return a new Transform stream to promote a stream of Record objects
 * into IndicatorRecord objects.
 *
 * @param context - Context of record stream
 * @returns Transform stream promoting Records into empty IndicatorRecords
 */
export default function toIndicatorRecord(context: RecordContext): Transform {
    return new Transform({
        objectMode: true,
        transform(record: Record, _: string, callback: any) {
            const indicatorRecord: IndicatorRecord = {
                context: context,
                record: record,
                indicators: new Map<string, any>()
            }
            this.push(indicatorRecord)
            callback()
        }
    })
}
