import { equal, ok } from 'zoroaster/assert'
import Context from '../context'
import alamodeCc from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof alamodeCc, 'function')
  },
  async 'calls package without error'() {
    await alamodeCc()
  },
  async 'gets a link to the fixture'({ FIXTURE }) {
    const res = await alamodeCc({
      type: FIXTURE,
    })
    ok(res, FIXTURE)
  },
}

export default T