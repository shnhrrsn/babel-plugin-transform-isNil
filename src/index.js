'use strict'

const template = require('@babel/template').default
const helpers = require('@babel/helpers/lib/helpers').default
const t = require('@babel/types')

helpers.isnil = {
  minVersion: '7.0.0-beta.0',
  ast() {
    return template.program.ast(`
      export default function _isnil(val) {
        return val === null || typeof val === 'undefined'
      }
    `)
  }
}

function plugin() {
  return {
    visitor: {
      MemberExpression(path, state) {
        const node = path.node
        const property = node.property

        if (
          property.name !== 'isNil' ||
          path.container.type === 'CallExpression'
        ) {
          return
        }

        const isnil = state.file.addHelper('isnil').name
        path.replaceWith(
          t.callExpression(t.identifier(isnil), [node.object])
        )
      }
    }
  }
}

module.exports = plugin
