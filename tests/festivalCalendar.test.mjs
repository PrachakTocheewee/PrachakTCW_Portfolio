import test from 'node:test';
import assert from 'node:assert/strict';
import {festivalsOn,selectedIds} from '../src/festivalCalendar.js';
const ids=d=>festivalsOn(new Date(d+'T12:00:00+07:00')).map(x=>x.id);
test('owner selection',()=>{assert.equal(selectedIds.length,25);for(const id of ['04','05','12','16','19','21','23','24'])assert.ok(!selectedIds.includes(id))});
test('dates and recurrence',()=>{assert.ok(ids('2026-04-14').includes('01'));assert.deepEqual(ids('2026-11-24'),['02','03']);assert.ok(ids('2027-05-20').includes('08'));assert.ok(ids('2027-03-28').includes('11'));assert.ok(ids('2026-11-26').includes('20'));assert.deepEqual(ids('2026-03-14'),['27','28']);assert.ok(ids('2030-10-20').includes('29'));assert.ok(!ids('2026-10-20').includes('29'));assert.ok(ids('2028-09-12').includes('30'));assert.ok(!ids('2026-07-04').includes('19'));assert.ok(!ids('2028-11-13').includes('02'))});
test('Bangkok day boundary',()=>{assert.ok(festivalsOn(new Date('2026-12-24T17:00:00Z')).some(x=>x.id==='17'))});
